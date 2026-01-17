# Скрипт для автоматической отправки стратегических файлов в приватный репозиторий
# Используется в pre-commit hook

param(
    [Parameter(ValueFromRemainingArguments=$true)]
    [string[]]$BlockedFiles
)

$ErrorActionPreference = "Stop"

# Путь к приватному репозиторию (из переменной окружения или конфига)
$PrivateRepoPath = if ($env:PRIVATE_REPO_PATH) { 
    $env:PRIVATE_REPO_PATH 
} else { 
    Write-Host "❌ PRIVATE_REPO_PATH не установлен!" -ForegroundColor Red
    Write-Host "💡 Установите переменную окружения PRIVATE_REPO_PATH" -ForegroundColor Yellow
    exit 1
}

if (-not (Test-Path $PrivateRepoPath)) {
    Write-Host "❌ Приватный репозиторий не найден: $PrivateRepoPath" -ForegroundColor Red
    Write-Host "💡 Отправьте файлы вручную" -ForegroundColor Yellow
    exit 1
}

# Путь к публичному репозиторию (текущий)
$PublicRepoPath = if ($env:PUBLIC_REPO_PATH) { 
    $env:PUBLIC_REPO_PATH 
} else { 
    # Fallback: текущая директория
    (Get-Location).Path
}

Write-Host "📦 Отправка файлов в приватный репозиторий..." -ForegroundColor Cyan

foreach ($file in $BlockedFiles) {
    # Убираем кавычки, если есть
    $file = $file.Trim('"', "'")
    
    # Полный путь к файлу в публичном репозитории
    $sourceFile = Join-Path $PublicRepoPath $file
    
    if (-not (Test-Path $sourceFile)) {
        Write-Host "⚠️  Файл не найден: $file" -ForegroundColor Yellow
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
        Write-Host "✅ Скопирован: $file" -ForegroundColor Green
        
        # Добавляем в git приватного репозитория
        Push-Location $PrivateRepoPath
        try {
            git add $file 2>&1 | Out-Null
            Write-Host "   → Добавлен в staging приватного репозитория" -ForegroundColor Gray
        } catch {
            Write-Host "   ⚠️  Ошибка при добавлении в git: $_" -ForegroundColor Yellow
        }
        Pop-Location
        
    } catch {
        Write-Host "❌ Ошибка при копировании $file : $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "✅ Файлы отправлены в приватный репозиторий" -ForegroundColor Green
Write-Host "💡 Не забудьте закоммитить их в приватном репозитории" -ForegroundColor Yellow
