import Image from "next/image";
import x from '../../public/twitter.svg'
import telegram from '../../public/telegram.svg';
import dex from '../../public/dex.svg'
import hero from '../../public/hero.gif';
import sausage from '../../public/sausage.png';
import info_icon from '../../public/info-icon.svg'
import hot_dog from '../../public/hotdog.svg'

export default function Home() {
  return (
    <div>
       <div className="header ng-star-inserted">
         <div className="">
            <div className="container flex justify-between align-center w-100 menu-header">

              {/* <div className="flex justify-between align-center w-100">
                <a class="cursor-pointer flex align-center p-0" >
                <svg width="99" height="89" viewBox="0 0 99 89" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" _ngcontent-ng-c2925222286="" aria-hidden="true" style="width: 70px; height: 70px;">
                  <mask id="mask0_78_65" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="99" height="89" _ngcontent-ng-c2925222286="">
                  <path d="M99 0H0V89H99V0Z" fill="#D9D9D9" _ngcontent-ng-c2925222286=""></path>
                  </mask>
                  <g mask="url(#mask0_78_65)" _ngcontent-ng-c2925222286="">
                  <path d="M105 -11H-5V99H105V-11Z" fill="url(#pattern0_78_65)" _ngcontent-ng-c2925222286=""></path>
                  </g>
                  <defs _ngcontent-ng-c2925222286="">
                  <pattern id="pattern0_78_65" patternContentUnits="objectBoundingBox" width="1" height="1" _ngcontent-ng-c2925222286="">
                  <use xlink:href="#image0_78_65" transform="translate(-0.0951829 -0.100531) scale(0.00238073)" _ngcontent-ng-c2925222286=""></use>
                  </pattern>
                  // <image id="image0_78_65" width="500" height="500" xlink:href="data:image/png;base64,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auSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMC/z93Bzsv7P6DXgAAAABJRU5ErkJggg==" _ngcontent-ng-c2925222286=""></image>
                  </defs>
                </svg>
                </a>
              </div> */}

              <div  class="flex align-center">
                <a title="staking" translate="" href="/en/staking">Staking</a>
                <a href="/assets/documents/whitepaper.pdf" target="_blank" translate="">Whitepaper</a>
                <div  dropdown="" class="btn-group language wx-100 menu ">
                  <div _ngcontent-ng-c2925222286="" dropdowntoggle="" type="button" class="dropdown-toggle d-flex align-items-center justify-content-center" aria-haspopup="true" aria-expanded="false">
                    <a _ngcontent-ng-c2925222286="" translate="" class="mx-1">About</a>
                    <svg-icon _ngcontent-ng-c2925222286="" src="./assets/images/svg-icons/angle-down.svg" class="dropdown">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" _ngcontent-ng-c2925222286="" aria-hidden="true">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" _ngcontent-ng-c2925222286=""></path>
                      </svg>
                    </svg-icon>
                 </div>
                </div>
                <a  href="/assets/documents/audit.pdf" target="_blank" translate="">Audit</a>
              </div>


              <div class="flex align-center">
                <div class="flex align-center justify-center gap-2">
                  <a href="https://twitter.com/WienerDogAI" target="_blank" class="mx-0">
                    <Image src={x} alt="" />
                  </a>
                  <a href="https://t.me/WienerAi" target="_blank" class="mx-0">
                    <Image src={telegram} alt="" />
                  </a>
                  <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x51d1ac117aadd99e7fc56e802c86a7464cb6ab9d?t=1722859107666" target="_blank" class="mx-0">
                    <Image src={dex} alt="" />
                  </a>
                </div>
                <div className="btn btn-primary d-flex align-items-center font-14 ms-3 text-uppercase ng-star-inserted">Buy now</div>
              </div>


            </div>


         </div>
       </div>

       <div className="content">
            <div className="banner">
            <div class="overlay">
              <Image src={hero} alt="" class="img-fluid hero-bg" />
            </div>
            <div className="container">
              <div className="bannerSec row flex justify-between">
                <div className="col-12 col-md-7 col-lg-8 leftSec">
                    <div className="banner-content">
                      <h1 translate="" className="mt-4">
                        <span  translate="" class="text-primary">Frostproperties AI</span>
                        <br />
                          <span translate="" class="font-40 font-sm-60 fw-regular">Part Dog, Part Sausage, Part</span>
                          <br />
                          <span class="font-40 font-sm-60">AI Trading Bot</span>
                          <div >
                            <Image src={sausage} alt="" className="img-fluid sausage-img mt-4" />

                          </div>
                      </h1>



                    </div>
                </div>

                <div className="col-12 col-md-5 col-lg-4 rightSec">
                  <div className="walletBox mt-4">

                    <div className="px-2 px-lg-3 w-100 flex flex-col align-center justify-start text-center">
                    <p className="text-lg text-capitalize mb-3 shadow-text ng-star-inserted">$WAI Claim Now Live</p>

                    <p className="font-18 text-capitalize mb-1 shadow-text text-break ng-star-inserted">
                      You Can Now Claim Your $WAI Tokens. Plus, Stake Your Tokens To Earn Rewards! Add 0xFE8526A77A2c3590E5973bA81308B90BEA21FBFF To Your Wallet To See Your $WAI.
                    </p>

                    <p  className="my-3 font-15 text-center">
                      <span className="fw-regular text-white text-uppercase font-24">
                        OVER $9M RAISED
                      </span>
                    </p>

                    <div  class="flex justify-center align-center text-center mb-2 px-3">
                      <span class="text-uppercase">Your purchased $WAI</span>
                      <span class="ms-1"> = 0</span>
                      <Image src={info_icon} alt="" className="img-fluid ms-2 cursor-pointer" />
                    </div>

                    <div class="flex justify-center align-center text-center font-13 px-3 mt-0">
                      <span class="text-uppercase">Your stakeable $WAI</span>
                      <span>&nbsp;=&nbsp;0</span>
                      <Image src={info_icon} alt="" class="img-fluid ms-2 cursor-pointer" />

                    </div>

                    <div class="px-3 pb-3 mt-3 swapArea">

                    <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x51d1ac117aadd99e7fc56e802c86a7464cb6ab9d?t=1722859107666" target="_blank" class="btn btn-primary w-100 text-uppercase">
                      <Image src={dex} height="22" alt="" class="me-2" />
                      <span translate="">BUY ON DEXTOOLS</span>
                    </a>

                    <div  class="d-flex align-items-center justify-content-center gap-2 mt-2 ng-star-inserted">
                      <button class="btn btn-primary w-[100%] text-uppercase ng-star-inserted">
                        <span >Connect Wallet</span>
                      </button>
                    </div>

                    </div>

                    </div>

                  </div>

                </div>
              </div>

            </div>
            </div>

            <div className="stats">
              <section id="stats" class="stats">
              <div class="container my-4">
                <div class="row flex justify-between">
                  <div class="col-6 col-md-3 text-center text-primary">
                    <div translate="" class="font-sm-18 font-16">Total $WAI Staked</div>
                    <div class="font-23 font-sm-36">9,070,449,295</div>
                  </div>
                  <div class="col-6 col-md-3 text-center text-primary">
                    <div translate="" class="font-sm-18 font-16">% of $WAI Staked</div>
                    <div class="font-23 font-sm-36">71%</div>
                  </div>
                  <div class="col-6 col-md-3 text-center mt-3 mt-md-0 text-primary">
                    <div translate="" class="font-sm-18 font-16">Rewards p/a</div>
                    <div class="font-23 font-sm-36">114%</div>
                  </div>
                  <div class="col-6 col-md-3 text-center mt-3 mt-md-0 text-primary">
                    <div translate="" class="font-sm-18 font-16">Total Rewards ($WAI)</div>
                    <div class="font-23 font-sm-36">3,341,172,472</div>
                    </div>
                </div>
                </div>
              </section>
              <section className="videos-wraaper mt-5 my-lg-5">
                <div className="container">
                  <div className="flex align-center gap-4 justify-center">

                  <div className="iframe-wrapper">
                    <iframe width="100%" height="155" src="https://www.youtube.com/embed/r6iDh-M-Rzk?si=MASb_MUun9tf6zM1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="">
                    </iframe>
                  </div>
                  <div className="iframe-wrapper">
                    <iframe  width="100%" height="155" src="https://www.youtube.com/embed/PG965Q584fY?si=M8Se7CQoSOrbWHnG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="">
                    </iframe>
                  </div>

                  <div class="iframe-wrapper">
                    <iframe width="100%" height="155" src="https://www.youtube.com/embed/HsbE9lmM64M?si=iAgB4wmCP1izrPjm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="">
                    </iframe>
                  </div>

                  <div class="iframe-wrapper">
                    <iframe width="100%" height="155" src="https://www.youtube.com/embed/dbUR_ebWLII?si=FkExmnslWdOi3fOW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="">
                    </iframe>
                  </div>

                  </div>
                </div>

              </section>
            </div>

            <div className="twitter_">
              <section className="twitter-wrapper py-4 mb-4 overflow-hidden">
                  <div className="container position-relative">
                  <Image src={hot_dog} alt="" class="hotdog-img img-fluid d-none d-lg-block" />
                  <h3  class="text-primary text-center font-lg-50 font-30 my-5 pt-5">FOLLOW @RockshootAI</h3>
                  </div>
              </section>
            </div>
       </div>



    </div>
  );
}
