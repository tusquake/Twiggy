import React from 'react'
import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br /> <span>Twiggy App</span></p>
            <div className="app-download-platforms">
                <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&pcampaignid=web_share" target="_blank" rel="noopener noreferrer"><img src={assets.play_store} alt="" /></a>
                <a href="https://apps.apple.com/in/app/swiggy-food-grocery-dineout/id989540920" target="_blank" rel="noopener noreferrer"><img src={assets.app_store} alt="" /></a>
            </div>
        </div>
    )
}

export default AppDownload
