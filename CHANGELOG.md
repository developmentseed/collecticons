# @devseed-ui/collecticons

## 3.0.0
Total revamp of the collecticons library. The different repositories were centralized under a monorepo, and the build process was more automated, generating React and Chakra versions directly from the SVG files.
The `icon font` and the `collecticons processor` were deprecated in favor of the new versions.

## 3.0.1
Fix incorrect svg paths for `calendar-minus.svg`, `magnifier-minus.svg`, `magnifier-plus.svg`.

## 3.0.2
Fix deployment script that was not building the packages ([#22](https://github.com/developmentseed/collecticons/issues/22))

## 3.0.3
- Remove icon added by mistake `collection-layers.svg` (not a real collecticon)
- Fix showcase build script

## 3.1.0
- Include 7 new icons: `collecticon-brand-bluesky`, `collecticon-brand-stackoverflow`, `collecticon-download-3`, `collecticon-form`, `collecticon-page-plus`, `collecticon-stream`, `collecticon-upload-3`
- Update documentation
