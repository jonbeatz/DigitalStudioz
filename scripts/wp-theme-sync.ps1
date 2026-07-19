<#
.SYNOPSIS
  Sync LocalWP Divi child theme <-> DigitalStudioz git mirror (and optional zip backup).

.DESCRIPTION
  Live SoT for editing remains LocalWP:
    Local-WP/DigitalStudioz-WP/app/public/wp-content/themes/dgtl-digitalstudioz-theme

  Git mirror (commit this):
    DigitalStudioz/assets/wp-theme/dgtl-digitalstudioz-theme

  Default action: Pull (LocalWP -> git mirror).
  Use -Push to copy mirror -> LocalWP (restore / other machines).
  Use -Backup to also zip into G:\Hermes_Project_BackUpz\DigitalStudioz\themes\

.EXAMPLE
  npm run theme:sync
  npm run theme:backup
  npm run theme:push
#>
[CmdletBinding()]
param(
  [ValidateSet('Pull', 'Push')]
  [string]$Direction = 'Pull',
  [switch]$Backup,
  [switch]$WhatIf
)

$ErrorActionPreference = 'Stop'

$RepoRoot = Split-Path -Parent $PSScriptRoot
$LiveTheme = 'D:\Hermes\projects\Local-WP\DigitalStudioz-WP\app\public\wp-content\themes\dgtl-digitalstudioz-theme'
$MirrorTheme = Join-Path $RepoRoot 'assets\wp-theme\dgtl-digitalstudioz-theme'
$BackupRoot = 'G:\Hermes_Project_BackUpz\DigitalStudioz\themes'

function Get-ThemeVersion([string]$ThemeDir) {
  $css = Join-Path $ThemeDir 'style.css'
  if (-not (Test-Path $css)) { return 'unknown' }
  $m = Select-String -Path $css -Pattern '^\s*Version:\s*(.+)$' | Select-Object -First 1
  if ($m) { return $m.Matches.Groups[1].Value.Trim() }
  return 'unknown'
}

function Sync-Theme([string]$From, [string]$To, [string]$Label) {
  if (-not (Test-Path $From)) {
    throw "Source theme missing: $From"
  }
  $parent = Split-Path $To -Parent
  if (-not (Test-Path $parent)) {
    New-Item -ItemType Directory -Path $parent -Force | Out-Null
  }
  Write-Host "[theme:sync] $Label"
  Write-Host "  From: $From"
  Write-Host "  To:   $To"
  if ($WhatIf) {
    Write-Host '  (WhatIf - no copy)'
    return
  }
  # Mirror contents; robocopy exit 0-7 = success
  $rcArgs = @($From, $To, '/E', '/NFL', '/NDL', '/NJH', '/NJS', '/NC', '/NS', '/NP', '/R:2', '/W:2')
  & robocopy @rcArgs | Out-Null
  $code = $LASTEXITCODE
  if ($code -ge 8) {
    throw "robocopy failed with exit $code"
  }
  $ver = Get-ThemeVersion $To
  Write-Host "[theme:sync] OK - version $ver (robocopy exit $code)"
}

function Backup-ThemeZip([string]$From) {
  if (-not (Test-Path $From)) { throw "Theme missing: $From" }
  if (-not (Test-Path $BackupRoot)) {
    New-Item -ItemType Directory -Path $BackupRoot -Force | Out-Null
  }
  $ver = Get-ThemeVersion $From
  $stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
  $zipName = "dgtl-digitalstudioz-theme-v$ver-$stamp.zip"
  $zipPath = Join-Path $BackupRoot $zipName
  Write-Host "[theme:backup] $zipPath"
  if ($WhatIf) {
    Write-Host '  (WhatIf - no zip)'
    return
  }
  if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
  Compress-Archive -Path (Join-Path $From '*') -DestinationPath $zipPath -CompressionLevel Optimal
  $len = [math]::Round((Get-Item $zipPath).Length / 1KB)
  Write-Host "[theme:backup] OK - ${len} KB"
}

if ($Direction -eq 'Pull') {
  Sync-Theme -From $LiveTheme -To $MirrorTheme -Label 'Pull LocalWP -> git mirror'
} else {
  Sync-Theme -From $MirrorTheme -To $LiveTheme -Label 'Push git mirror -> LocalWP'
}

if ($Backup) {
  $src = if ($Direction -eq 'Pull') { $LiveTheme } else { $MirrorTheme }
  Backup-ThemeZip -From $src
}

Write-Host '[theme:sync] Done. Commit assets/wp-theme/ when ready.'
