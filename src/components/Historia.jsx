import React from 'react'
import HistoriaStyles from "./Historia.module.css"

export default function Historia() {
  return (
    <div className={HistoriaStyles.container}>
        <h2 className={HistoriaStyles.title}>HISTORIA</h2>
        <div className={HistoriaStyles.main}>
            <div className={HistoriaStyles.img}></div>
            <div className={HistoriaStyles.text}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales orci ut tortor dictum, non egestas massa tincidunt. In fermentum ac sem et sagittis. Aliquam lacinia elementum dui, vitae vulputate velit placerat varius. Curabitur malesuada dictum lectus. Etiam varius, turpis et dignissim semper, metus leo consequat eros, non sagittis nunc elit sit amet dui. Duis ac egestas libero. Quisque finibus mauris a fermentum venenatis. Cras tempor augue est, consequat semper diam accumsan a. </p>
                <p>Proin faucibus magna ac vulputate suscipit. Ut aliquet commodo gravida. Mauris metus justo, ultrices rhoncus dui ut, efficitur eleifend diam. Pellentesque ullamcorper ex id leo efficitur, quis tempus odio cursus. In hac habitasse platea dictumst. Fusce ultricies, magna nec maximus pharetra, justo eros porta lorem, id vulputate velit nunc nec mauris. Suspendisse potenti. Vestibulum venenatis ante sit amet quam vulputate faucibus. Suspendisse euismod sem in tortor eleifend, tincidunt congue lectus molestie.</p> 
                <p>Nulla bibendum leo ex, vel lobortis libero hendrerit mattis. Etiam efficitur nibh lorem, vitae finibus purus mollis vitae. Mauris in dapibus odio, quis rutrum diam. Nam eget nibh eu ligula facilisis cursus ut ac erat. Cras hendrerit nec sapien id fringilla. Nunc ac dolor vel metus tincidunt euismod nec at ex. Nullam tempus urna eu fringilla mollis. Aliquam rutrum suscipit mi non elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tincidunt libero vitae libero posuere vestibulum.</p>
            </div>
            
        </div>
    </div>
  )
}
