# Запускать из PowerShell ВНЕ IDE. Коммит без Co-authored-by.
# Использование: cd D:\Projects\HampfreeBlog
#   .\scripts\commit-from-outside.ps1              — закоммитить staged с дефолтным сообщением
#   .\scripts\commit-from-outside.ps1 -FixLast      — убрать Co-authored-by из последнего коммита

param([string]$Message = "chore: remove tags, update guide and README, diversification part-2/3", [switch]$FixLast)

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $root

if ($FixLast) {
    $lines = (git log -1 --format="%B") -split "`r?`n"
    $clean = ($lines | Where-Object { $_ -notmatch "Co-authored-by:" -and $_ -notmatch "cursoragent" }) -join "`n"
    $path = Join-Path $root "commit-msg-tmp.txt"
    [IO.File]::WriteAllText($path, $clean.TrimEnd(), [Text.UTF8Encoding]::new($false))
    git commit --amend -F $path
    if (Test-Path $path) { Remove-Item $path -Force }
    exit
}

git commit -m $Message
Write-Host "Push: git push origin main"
