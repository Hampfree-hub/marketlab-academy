# Скрипт для автоматической отправки стратегических файлов в приватный репозиторий
# Используется в pre-commit hook

param(
    [Parameter(ValueFromPipeline=$false, ValueFromRemainingArguments=$true)]
    [string[]]$BlockedFiles = @()
)

$ErrorActionPreference = "Stop"

# Путь к приватному репозиторию (из переменной окружения или конфига)
$PrivateRepoPath = if ($env:PRIVATE_REPO_PATH) { 
    $env:PRIVATE_REPO_PATH 
} else { 
    Write-Host "[ERROR] PRIVATE_REPO_PATH not set!" -ForegroundColor Red
    Write-Host "[INFO] Set PRIVATE_REPO_PATH environment variable" -ForegroundColor Yellow
    exit 1
}

if (-not (Test-Path $PrivateRepoPath)) {
    Write-Host "[ERROR] Private repository not found: $PrivateRepoPath" -ForegroundColor Red
    Write-Host "[INFO] Send files manually" -ForegroundColor Yellow
    exit 1
}

# Путь к публичному репозиторию (текущий)
$PublicRepoPath = if ($env:PUBLIC_REPO_PATH) { 
    $env:PUBLIC_REPO_PATH 
} else { 
    # Fallback: текущая директория
    (Get-Location).Path
}

Write-Host "[INFO] Sending files to private repository..." -ForegroundColor Cyan

foreach ($file in $BlockedFiles) {
    # Убираем кавычки, если есть
    $file = $file.Trim('"', "'")
    
    # Полный путь к файлу в публичном репозитории
    $sourceFile = Join-Path $PublicRepoPath $file
    
    if (-not (Test-Path $sourceFile)) {
        Write-Host "[WARN] File not found: $file" -ForegroundColor Yellow
        continue
    }
    
    # Путь к файлу в приватном репозитории
    $destFile = Join-Path $PrivateRepoPath $file
    
    # Создаём директорию, если нужно
    $destDir = Split-Path $destFile -Parent
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    
    # Копируем файл
    try {
        Copy-Item -Path $sourceFile -Destination $destFile -Force
        Write-Host "[OK] Copied: $file" -ForegroundColor Green
        
        # Добавляем в git приватного репозитория
        Push-Location $PrivateRepoPath
        try {
            git add $file 2>&1 | Out-Null
            Write-Host "   -> Added to private repo staging" -ForegroundColor Gray
        } catch {
            Write-Host "   [WARN] Error adding to git: $_" -ForegroundColor Yellow
        }
        Pop-Location
        
    } catch {
        Write-Host "[ERROR] Error copying $file : $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "[OK] Files sent to private repository" -ForegroundColor Green
Write-Host "[INFO] Remember to commit them in private repository" -ForegroundColor Yellow
