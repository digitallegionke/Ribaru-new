import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { a0a0affIcon } from './a0a0affIcon.js';
import { ImageIcon } from './ImageIcon.js';
import { InterfaceAlertAlarmBell2AlertB } from './InterfaceAlertAlarmBell2AlertB.js';
import { InterfaceHome1HomeHouseMapRoof } from './InterfaceHome1HomeHouseMapRoof.js';
import { InterfaceSearchGlassSearchMagn } from './InterfaceSearchGlassSearchMagn.js';
import { InterfaceSettingCogWorkLoading } from './InterfaceSettingCogWorkLoading.js';
import classes from './LandingPage.module.css';
import { Menu_Property1Home } from './Menu_Property1Home/Menu_Property1Home.js';
import { MoneyCashierShopShoppingPayPay } from './MoneyCashierShopShoppingPayPay.js';
import { ShippingBox2BoxPackageLabelDel } from './ShippingBox2BoxPackageLabelDel.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 179:1069 */
export const LandingPage: FC<Props> = memo(function LandingPage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame1618873529}>
        <div className={classes.frame1618873527}>
          <div className={classes.a0a0aff}>
            <a0a0affIcon className={classes.icon5} />
          </div>
          <div className={classes.frame1618873486}>
            <div className={classes.interfaceAlertAlarmBell2AlertB}>
              <InterfaceAlertAlarmBell2AlertB className={classes.icon6} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame1618873485}>
        <div className={classes.frame1618873484}>
          <div className={classes.heyKevin}>Hey Kevin</div>
          <div className={classes.welcomeBack}>Welcome Back</div>
        </div>
        <div className={classes.image}>
          <ImageIcon className={classes.icon7} />
        </div>
      </div>
      <div className={classes.frame1618873481}>
        <div className={classes.frame1618873477}>
          <div className={classes._16788}>16,788</div>
          <div className={classes.tODAYSSALES}>TODAY’S SALES</div>
          <div className={classes.kES}>KES</div>
          <div className={classes.frame1618873524}>
            <div className={classes.sALESTHISWEEK}>SALES THIS WEEK</div>
            <div className={classes.frame1618873528}>
              <div className={classes.kES2}>KES</div>
              <div className={classes._45850}>45,850</div>
            </div>
          </div>
          <div className={classes.frame1618873525}>
            <div className={classes.tOTALITEMSSOLD}>TOTAL ITEMS SOLD</div>
            <div className={classes._150}>150</div>
          </div>
        </div>
      </div>
      <Menu_Property1Home
        className={classes.menu}
        swap={{
          interfaceHome1HomeHouseMapRoof: <InterfaceHome1HomeHouseMapRoof className={classes.icon} />,
          moneyCashierShopShoppingPayPay: <MoneyCashierShopShoppingPayPay className={classes.icon2} />,
          shippingBox2BoxPackageLabelDel: <ShippingBox2BoxPackageLabelDel className={classes.icon3} />,
          interfaceSettingCogWorkLoading: <InterfaceSettingCogWorkLoading className={classes.icon4} />,
        }}
      />
      <div className={classes.frame1618873540}>
        <div className={classes.frame1618873482}>
          <div className={classes.addStock}>Add Stock</div>
        </div>
        <div className={classes.frame1618873483}>
          <div className={classes.searchWithBarcode}>Search with Barcode</div>
        </div>
      </div>
      <div className={classes.frame1618873500}>
        <div className={classes.todaySSales}>Today’s Sales</div>
        <div className={classes.frame1618873494}>
          <div className={classes.frame1618873462}>
            <div className={classes.interfaceSearchGlassSearchMagn}>
              <InterfaceSearchGlassSearchMagn className={classes.icon8} />
            </div>
            <div className={classes.searchStock}>Search stock</div>
          </div>
          <div className={classes.frame1618873493}>
            <div className={classes.frame1618873492}>
              <div className={classes.indianStyleCurryPaste}>Indian style curry paste</div>
              <div className={classes._3Items}>3 Items</div>
            </div>
            <div className={classes.frame1618873541}>
              <div className={classes.kES3}>KES</div>
              <div className={classes._24000}>2,400.00</div>
            </div>
            <div className={classes.vector}>
              <VectorIcon className={classes.icon9} />
            </div>
          </div>
          <div className={classes.frame1618873498}>
            <div className={classes.frame16188734922}>
              <div className={classes.granola}>Granola</div>
              <div className={classes._8Items}>8 Items</div>
            </div>
            <div className={classes.frame16188735412}>
              <div className={classes.kES4}>KES</div>
              <div className={classes._85000}>8,500.00</div>
            </div>
            <div className={classes.vector2}>
              <VectorIcon2 className={classes.icon10} />
            </div>
          </div>
          <div className={classes.frame1618873499}>
            <div className={classes.frame16188734923}>
              <div className={classes.trailMix}>Trail Mix</div>
              <div className={classes._8Items2}>8 Items</div>
            </div>
            <div className={classes.frame16188735413}>
              <div className={classes.kES5}>KES</div>
              <div className={classes._18000}>1,800.00</div>
            </div>
            <div className={classes.vector3}>
              <VectorIcon3 className={classes.icon11} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
