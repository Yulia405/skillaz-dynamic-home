$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

if (Get-Command node -ErrorAction SilentlyContinue) {
  node .\serve.cjs
  exit $LASTEXITCODE
}

if (Get-Command python -ErrorAction SilentlyContinue) {
  python -m http.server 8090 --bind 127.0.0.1
  exit $LASTEXITCODE
}

if (Get-Command py -ErrorAction SilentlyContinue) {
  py -m http.server 8090 --bind 127.0.0.1
  exit $LASTEXITCODE
}

throw 'Для локального запуска нужен Node.js или Python.'
