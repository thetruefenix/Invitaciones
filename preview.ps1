$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$indexPath = Join-Path $root "index.html"
$packageJsonPath = Join-Path $root "package.json"
$viteUrl = "http://localhost:5173"

function Test-UrlAvailable {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Url
  )

  try {
    $response = Invoke-WebRequest -Uri $Url -Method Head -TimeoutSec 3
    return $response.StatusCode -ge 200 -and $response.StatusCode -lt 500
  } catch {
    return $false
  }
}

function Find-NpmCommand {
  $candidates = @()

  try {
    $npm = Get-Command npm.cmd -ErrorAction Stop
    if ($npm.Path) {
      $candidates += $npm.Path
    }
  } catch {
  }

  try {
    $npm = Get-Command npm -ErrorAction Stop
    if ($npm.Path) {
      $candidates += $npm.Path
    }
  } catch {
  }

  $candidates += @(
    "C:\Program Files\nodejs\npm.cmd",
    "C:\Program Files\nodejs\npm.exe",
    "$env:APPDATA\npm\npm.cmd"
  )

  foreach ($candidate in $candidates | Select-Object -Unique) {
    if ($candidate -and (Test-Path -LiteralPath $candidate -PathType Leaf)) {
      return $candidate
    }
  }

  return $null
}

if (-not (Test-Path -LiteralPath $indexPath -PathType Leaf)) {
  Write-Error "No se encontro el archivo index.html en $root"
}

Write-Host ""

if (Test-Path -LiteralPath $packageJsonPath -PathType Leaf) {
  if (Test-UrlAvailable -Url $viteUrl) {
    Write-Host "Abriendo vista previa local..." -ForegroundColor Green
    Write-Host $viteUrl -ForegroundColor Yellow
    Write-Host ""
    Start-Process -FilePath $viteUrl
    exit 0
  }

  $npmCommand = Find-NpmCommand

  if (-not $npmCommand) {
    Write-Host "Este proyecto necesita un servidor local de Vite para abrirse en navegador." -ForegroundColor Yellow
    Write-Host "No se encontro npm instalado en esta maquina." -ForegroundColor Red
    Write-Host ""
    Write-Host "Instala Node.js y luego ejecuta:" -ForegroundColor Green
    Write-Host "  npm install" -ForegroundColor Cyan
    Write-Host "  npm run dev" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Despues abre:" -ForegroundColor Green
    Write-Host "  $viteUrl" -ForegroundColor Cyan
    Write-Host ""
    exit 1
  }

  Write-Host "Levantando servidor local..." -ForegroundColor Green
  Write-Host "Usando: $npmCommand" -ForegroundColor DarkGray
  Write-Host ""

  Start-Process -FilePath $npmCommand -ArgumentList "run", "dev" -WorkingDirectory $root | Out-Null

  for ($i = 0; $i -lt 20; $i++) {
    Start-Sleep -Milliseconds 750
    if (Test-UrlAvailable -Url $viteUrl) {
      Write-Host "Abriendo vista previa local..." -ForegroundColor Green
      Write-Host $viteUrl -ForegroundColor Yellow
      Write-Host ""
      Start-Process -FilePath $viteUrl
      exit 0
    }
  }

  Write-Host "No se pudo detectar el servidor local automaticamente." -ForegroundColor Yellow
  Write-Host "Prueba abrir manualmente:" -ForegroundColor Green
  Write-Host "  $viteUrl" -ForegroundColor Cyan
  Write-Host ""
  exit 1
}

Write-Host "Abriendo vista previa local..." -ForegroundColor Green
Write-Host $indexPath -ForegroundColor Yellow
Write-Host ""

Start-Process -FilePath $indexPath
