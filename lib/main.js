import _getImageNaturalSize from "./modules/browser/getImageNaturalSize";
import _handleDisablePageScroll from "./modules/browser/handleDisablePageScroll";
import _checkPhoneNumber from "./modules/common/checkPhoneNumber";
import _formatHideString from "./modules/common/formatHideString";
import _formatPhoneNumber from "./modules/common/formatPhoneNumber";
import _formatPrice from "./modules/common/formatPrice";
const main_default = {
  handleDisablePageScroll: _handleDisablePageScroll,
  getImageNaturalSize: _getImageNaturalSize,
  formatHideString: _formatHideString,
  formatPrice: _formatPrice,
  checkPhoneNumber: _checkPhoneNumber,
  formatPhoneNumber: _formatPhoneNumber
};
export const {
  handleDisablePageScroll,
  getImageNaturalSize,
  formatHideString,
  formatPrice,
  checkPhoneNumber,
  formatPhoneNumber
} = main_default;
export default main_default;
