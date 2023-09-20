import _getImageNaturalSize from "./modules/browser/getImageNaturalSize";
import _cacheFile from "./modules/browser/cacheFile";
import _handleDisablePageScroll from "./modules/browser/handleDisablePageScroll";
import _checkPhoneNumber from "./modules/common/checkPhoneNumber";
import _formatHideString from "./modules/common/formatHideString";
import _formatPhoneNumber from "./modules/common/formatPhoneNumber";
import _formatPrice from "./modules/common/formatPrice";
import { wxAuth as _wxAuth } from "./modules/browser/wx";
const main_default = {
  handleDisablePageScroll: _handleDisablePageScroll,
  getImageNaturalSize: _getImageNaturalSize,
  formatHideString: _formatHideString,
  formatPrice: _formatPrice,
  checkPhoneNumber: _checkPhoneNumber,
  formatPhoneNumber: _formatPhoneNumber,
  wxAuth: _wxAuth,
  cacheFile: _cacheFile
};
export const {
  handleDisablePageScroll,
  getImageNaturalSize,
  formatHideString,
  formatPrice,
  checkPhoneNumber,
  formatPhoneNumber,
  wxAuth,
  cacheFile
} = main_default;
export default main_default;
