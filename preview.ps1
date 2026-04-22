$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$indexPath = Join-Path $root "index.html"

if (-not (Test-Path -LiteralPath $indexPath -PathType Leaf)) {
  Write-Error "No se encontro el archivo index.html en $root"
}

Write-Host ""
Write-Host "Abriendo vista previa local..." -ForegroundColor Green
Write-Host $indexPath -ForegroundColor Yellow
Write-Host ""

Start-Process -FilePath $indexPath
