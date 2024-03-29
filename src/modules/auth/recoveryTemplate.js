function recoveryTemplate(employee, url) {
  return `<head>\
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\
  <meta name="viewport" content="width=device-width, initial-scale=1">\
  <style>\
    @media screen and (max-width: 720px) {\
      body .c-v84rpm {\
        width: 100% !important;\
        max-width: 720px !important;\
      }\
      body .c-v84rpm .c-7bgiy1 .c-1c86scm {\
        display: none !important;\
      }\
      body .c-v84rpm .c-7bgiy1 .c-f1bud4 .c-pekv9n .c-1qv5bbj,\
      body .c-v84rpm .c-7bgiy1 .c-f1bud4 .c-1c9o9ex .c-1qv5bbj,\
      body .c-v84rpm .c-7bgiy1 .c-f1bud4 .c-90qmnj .c-1qv5bbj {\
        border-width: 1px 0 0 !important;\
      }\
      body .c-v84rpm .c-7bgiy1 .c-f1bud4 .c-183lp8j .c-1qv5bbj {\
        border-width: 1px 0 !important;\
      }\
      body .c-v84rpm .c-7bgiy1 .c-f1bud4 .c-pekv9n .c-1qv5bbj {\
        padding-left: 12px !important;\
        padding-right: 12px !important;\
      }\
      body .c-v84rpm .c-7bgiy1 .c-f1bud4 .c-1c9o9ex .c-1qv5bbj,\
      body .c-v84rpm .c-7bgiy1 .c-f1bud4 .c-90qmnj .c-1qv5bbj {\
        padding-left: 8px !important;\
        padding-right: 8px !important;\
      }\
      body .c-v84rpm .c-ry4gth .c-1dhsbqv {\
        display: none !important;\
      }\
    }\
    @media screen and (max-width: 720px) {\
      body .c-v84rpm .c-ry4gth .c-1vld4cz {\
        padding-bottom: 10px !important;\
      }\
    }\
  </style>\
  <title>Password Recovery</title>\
  </head>\
  <body style="margin: 0; padding: 0; font-family: &quot; HelveticaNeueLight&quot;,&quot;HelveticaNeue-Light&quot;,&quot;HelveticaNeueLight&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 300; font-stretch: normal; font-size: 14px; letter-spacing: .35px; background: #EFF3F6; color: #333333;">\
  <table border="1" cellpadding="0" cellspacing="0" align="center" class="c-v84rpm" style="border: 0 none; border-collapse: separate; width: 720px;" width="720">\
    <tbody>\
      <tr class="c-1syf3pb" style="border: 0 none; border-collapse: separate; height: 114px;">\
        <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">\
          <table align="center" border="1" cellpadding="0" cellspacing="0" class="c-f1bud4" style="border: 0 none; border-collapse: separate;">\
            <tbody>\
              <tr align="center" class="c-1p7a68j" style="border: 0 none; border-collapse: separate; padding: 16px 0 15px;">\
                <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle"><img alt="" src="https://res.cloudinary.com/bayyand/image/upload/v1654147781/BeeReign-01_qzey3g.png" class="c-1shuxio" style="border: 0 none; line-height: 100%; outline: none; text-decoration: none; height: 65px; width: 255px;" width="120" height="33"></td>\
              </tr>\
            </tbody>\
          </table>\
        </td>\
      </tr>\
      <tr class="c-7bgiy1" style="border: 0 none; border-collapse: separate; -webkit-box-shadow: 0 3px 5px rgba(0,0,0,0.04); -moz-box-shadow: 0 3px 5px rgba(0,0,0,0.04); box-shadow: 0 3px 5px rgba(0,0,0,0.04);">\
        <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">\
          <table align="center" border="1" cellpadding="0" cellspacing="0" class="c-f1bud4" style="border: 0 none; border-collapse: separate; width: 100%;" width="100%">\
            <tbody>\
              <tr class="c-pekv9n" style="border: 0 none; border-collapse: separate; text-align: center;" align="center">\
                <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">\
                  <table border="1" cellpadding="0" cellspacing="0" width="100%" class="c-1qv5bbj" style="border: 0 none; border-collapse: separate; border-color: #E3E3E3; border-style: solid; width: 100%; border-width: 1px 1px 0; background: #FBFCFC; padding: 40px 54px 42px;">\
                    <tbody>\
                      <tr style="border: 0 none; border-collapse: separate;">\
                        <td class="c-1m9emfx c-zjwfhk" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeueLight&quot;,&quot;HelveticaNeue-Light&quot;,&quot;HelveticaNeueLight&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 300; color: #1D2531; font-size: 25.45455px;"\
                          valign="middle">${employee}, recover your password.</td>\
                      </tr>\
                      <tr style="border: 0 none; border-collapse: separate;">\
                        <td class="c-46vhq4 c-4w6eli" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeueRoman&quot;,&quot;HelveticaNeue-Roman&quot;,&quot;HelveticaNeueRoman&quot;,&quot;HelveticaNeue-Regular&quot;,&quot;HelveticaNeueRegular&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 400; color: #7F8FA4; font-size: 15.45455px; padding-top: 20px;"\
                          valign="middle">Looks like you forgot your password?</td>\
                      </tr>\
                      <tr style="border: 0 none; border-collapse: separate;">\
                        <td class="c-eitm3s c-16v5f34" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeueMedium&quot;,&quot;HelveticaNeue-Medium&quot;,&quot;HelveticaNeueMedium&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,sans-serif;font-weight: 500; font-size: 13.63636px; padding-top: 12px;"\
                          valign="middle">We are here to help. Click the button below to change your password. <b>Valid for the next 15 minutes. </b></td>\
                      </tr>\
                      <tr style="border: 0 none; border-collapse: separate;">\
                        <td class="c-rdekwa" style="border: 0 none; border-collapse: separate; vertical-align: middle; padding-top: 38px;" valign="middle"><a href="${url}" target="_blank"\
                            class="c-1eb43lc c-1sypu9p c-16v5f34" style="color: #000000; -webkit-border-radius: 4px; font-family: &quot; HelveticaNeueMedium&quot;,&quot;HelveticaNeue-Medium&quot;,&quot;HelveticaNeueMedium&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,sans-serif;font-weight: 500; font-size: 13.63636px; line-height: 15px; display: inline-block; letter-spacing: .7px; text-decoration: none; -moz-border-radius: 4px; -ms-border-radius: 4px; -o-border-radius: 4px; border-radius: 4px; background-color: #EDD224; color: #ffffff; padding: 12px 24px;">Recover my password</a></td>\
                      </tr>\
                      <tr style="border: 0 none; border-collapse: separate;">\
                        <td class="c-ryskht c-zjwfhk" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeueLight&quot;,&quot;HelveticaNeue-Light&quot;,&quot;HelveticaNeueLight&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 300; font-size: 12.72727px; font-style: italic; padding-top: 52px;"\
                          valign="middle">If you didn’t ask to recover your password, please ignore this email.</td>\
                      </tr>\
                    </tbody>\
                  </table>\
                </td>\
              </tr>\
              <tr class="c-1c9o9ex c-1c86scm" style="border: 0 none; border-collapse: separate;">\
                <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">\
                  <table border="1" cellpadding="0" cellspacing="0" width="100%" class="c-1qv5bbj" style="border: 0 none; border-collapse: separate; border-color: #E3E3E3; border-style: solid; width: 100%; border-width: 1px 1px 0; background: #FFFFFF; padding: 32px 40px 40px; padding-top: 30px; padding-bottom: 40px;">\
                    <tbody>\
                      <tr style="border: 0 none; border-collapse: separate;">\
                        <td class="c-kjgl4z c-zjwfhk" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeueLight&quot;,&quot;HelveticaNeue-Light&quot;,&quot;HelveticaNeueLight&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 300; text-align: center; color: #7F8FA4; font-size: 20px; line-height: 22px;"\
                          valign="middle" align="center">Tired of forgetting your password?</td>\
                      </tr>\
                      <tr style="border: 0 none; border-collapse: separate;">\
                        <td class="c-1izzcs5 c-1gcznrt c-188skwt c-4w6eli" style="border: 0 none; border-collapse: separate; vertical-align: middle; font-family: &quot; HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeueRoman&quot;,&quot;HelveticaNeue-Roman&quot;,&quot;HelveticaNeueRoman&quot;,&quot;HelveticaNeue-Regular&quot;,&quot;HelveticaNeueRegular&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 400; text-align: center; font-size: 13.63636px; padding: 14px 0; line-height: 22px; padding-top: 16px;"\
                          valign="middle" align="center">Why wouldn’t you try using a password manager? Here are the best ones.</td>\
                      </tr>\
                      <tr style="border: 0 none; border-collapse: separate;">\
                        <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">\
                          <table border="1" cellpadding="0" cellspacing="0" width="100%" class="c-hji185" style="border: 0 none; border-collapse: separate; padding: 36px 30px 4px;">\
                            <tbody>\
                              <tr style="border: 0 none; border-collapse: separate;">\
                                <td width="33%" class="c-iwjxo3" style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">\
                                  <table border="1" cellpadding="0" cellspacing="0" width="100%" style="border: 0 none; border-collapse: separate;">\
                                    <tbody>\
                                      <tr style="border: 0 none; border-collapse: separate;">\
                                        <td\
                                          width="67%" class="c-1a7tcod" style="border: 0 none; border-collapse: separate; vertical-align: middle; text-align: center; padding-right: 24px;" valign="middle" align="center">\
                                          <table border="1" cellpadding="0" cellspacing="0" width="100%" style="border: 0 none; border-collapse: separate;">\
                                            <tbody>\
                                              <tr class="c-1dvf7hf c-zjwfhk" style="border: 0 none; border-collapse: separate; font-family: &quot; HelveticaNeueLight&quot;,&quot;HelveticaNeue-Light&quot;,&quot;HelveticaNeueLight&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 300; color: #000000; font-size: 14.54545px; line-height: 35px;">\
                                                <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">1Password</td>\
                                              </tr>\
                                              <tr class="c-1jl6f0y" style="border: 0 none; border-collapse: separate; height: 32px; display: inline-block;">\
                                                <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle"><a href="https://1password.com/" target="_blank" style="text-decoration: none; letter-spacing: .7px; HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeueRoman&quot;,&quot;HelveticaNeue-Roman&quot;,&quot;HelveticaNeueRoman&quot;,&quot;HelveticaNeue-Regular&quot;,&quot;HelveticaNeueRegular&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 400; line-height: 15px; display: inline-block; font-family: &quot; -webkit-border-radius: 4px; -moz-border-radius: 4px; -ms-border-radius: 4px; -o-border-radius: 4px; border-radius: 4px; background: transparent; text-transform: lowercase; font-size: 10.90909px; padding: 3px 10px; color: #377FEA; border: 1px solid #377FEA;"\
                                                    class="c-1eb43lc c-1v4o8f0 c-1eb43lc c-1h6ae2o c-4w6eli">Learn more</a></td>\
                                              </tr>\
                                            </tbody>\
                                          </table>\
                                </td>\
                                </tr>\
                                </tbody>\
                                </table>\
                        </td>\
                        <td width="33%" class="c-iwjxo3" style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">\
                          <table border="1" cellpadding="0" cellspacing="0" width="100%" style="border: 0 none; border-collapse: separate;">\
                            <tbody>\
                              <tr style="border: 0 none; border-collapse: separate;">\
                                <td\
                                  width="67%" class="c-1a7tcod" style="border: 0 none; border-collapse: separate; vertical-align: middle; text-align: center; padding-right: 24px;" valign="middle" align="center">\
                                  <table border="1" cellpadding="0" cellspacing="0" width="100%" style="border: 0 none; border-collapse: separate;">\
                                    <tbody>\
                                      <tr class="c-1dvf7hf c-zjwfhk" style="border: 0 none; border-collapse: separate; font-family: &quot; HelveticaNeueLight&quot;,&quot;HelveticaNeue-Light&quot;,&quot;HelveticaNeueLight&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 300; color: #000000; font-size: 14.54545px; line-height: 35px;">\
                                        <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">Dashlane</td>\
                                      </tr>\
                                      <tr class="c-1jl6f0y" style="border: 0 none; border-collapse: separate; height: 32px; display: inline-block;">\
                                        <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle"><a href="https://www.dashlane.com/" target="_blank" style="text-decoration: none; letter-spacing: .7px; HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeueRoman&quot;,&quot;HelveticaNeue-Roman&quot;,&quot;HelveticaNeueRoman&quot;,&quot;HelveticaNeue-Regular&quot;,&quot;HelveticaNeueRegular&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 400; line-height: 15px; display: inline-block; font-family: &quot; -webkit-border-radius: 4px; -moz-border-radius: 4px; -ms-border-radius: 4px; -o-border-radius: 4px; border-radius: 4px; background: transparent; text-transform: lowercase; font-size: 10.90909px; padding: 3px 10px; color: #377FEA; border: 1px solid #377FEA;"\
                                            class="c-1eb43lc c-1v4o8f0 c-1eb43lc c-1h6ae2o c-4w6eli">Learn more</a></td>\
                                      </tr>\
                                    </tbody>\
                                  </table>\
                        </td>\
                        </tr>\
                        </tbody>\
                        </table>\
                </td>\
                <td width="33%" class="c-iwjxo3" style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">\
                  <table border="1" cellpadding="0" cellspacing="0" width="100%" style="border: 0 none; border-collapse: separate;">\
                    <tbody>\
                      <tr style="border: 0 none; border-collapse: separate;">\
                        <td\
                          width="67%" class="c-1a7tcod" style="border: 0 none; border-collapse: separate; vertical-align: middle; text-align: center; padding-right: 24px;" valign="middle" align="center">\
                          <table border="1" cellpadding="0" cellspacing="0" width="100%" style="border: 0 none; border-collapse: separate;">\
                            <tbody>\
                              <tr class="c-1dvf7hf c-zjwfhk" style="border: 0 none; border-collapse: separate; font-family: &quot; HelveticaNeueLight&quot;,&quot;HelveticaNeue-Light&quot;,&quot;HelveticaNeueLight&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 300; color: #000000; font-size: 14.54545px; line-height: 35px;">\
                                <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">Bitwarden</td>\
                              </tr>\
                              <tr class="c-1jl6f0y" style="border: 0 none; border-collapse: separate; height: 32px; display: inline-block;">\
                                <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle"><a href="https://bitwarden.com/" target="_blank" style="text-decoration: none; letter-spacing: .7px; HelveticaNeue&quot;,&quot;HelveticaNeue&quot;,&quot;HelveticaNeueRoman&quot;,&quot;HelveticaNeue-Roman&quot;,&quot;HelveticaNeueRoman&quot;,&quot;HelveticaNeue-Regular&quot;,&quot;HelveticaNeueRegular&quot;,Helvetica,Arial,&quot;LucidaGrande&quot;,sans-serif;font-weight: 400; line-height: 15px; display: inline-block; font-family: &quot; -webkit-border-radius: 4px; -moz-border-radius: 4px; -ms-border-radius: 4px; -o-border-radius: 4px; border-radius: 4px; background: transparent; text-transform: lowercase; font-size: 10.90909px; padding: 3px 10px; color: #377FEA; border: 1px solid #377FEA;"\
                                    class="c-1eb43lc c-1v4o8f0 c-1eb43lc c-1h6ae2o c-4w6eli">Learn more</a></td>\
                              </tr>\
                            </tbody>\
                          </table>\
                </td>\
                </tr>\
                </tbody>\
                </table>\
        </td>\
        </tr>\
        </tbody>\
        </table>\
        </td>\
        </tr>\
        </tbody>\
        </table>\
        </td>\
        </tr>\
        <tr class="c-183lp8j" style="border: 0 none; border-collapse: separate;">\
          <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">\
            <table border="1" cellpadding="0" cellspacing="0" width="100%" class="c-1qv5bbj" style="border: 0 none; border-collapse: separate; border-color: #E3E3E3; border-style: solid; width: 100%; background: #FFFFFF; border-width: 1px; font-size: 11.81818px; text-align: center; padding: 18px 40px 20px;"\
              align="center">\
              <tbody>\
                <tr style="border: 0 none; border-collapse: separate;">\
                  <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle"><span class="c-1w4lcwx">You receive this email because you or someone initiated a password recovery operation on BeeReign software</span></td>\
                </tr>\
              </tbody>\
            </table>\
          </td>\
        </tr>\
        </tbody>\
        </table>\
        </td>\
      </tr>\
      <tr class="c-ry4gth" style="border: 0 none; border-collapse: separate;">\
        <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">\
          <table border="1" cellpadding="0" cellspacing="0" width="100%" class="c-1vld4cz" style="border: 0 none; border-collapse: separate; padding-bottom: 26px;">\
            <tbody>\
              <tr style="border: 0 none; border-collapse: separate;">\
                <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">\
                  <table border="1" cellpadding="0" cellspacing="0" width="100%" class="c-15u37ze" style="border: 0 none; border-collapse: separate; font-size: 10.90909px; text-align: center; color: #7F8FA4; padding-top: 22px;" align="center">\
                    <tbody>\
                      <tr style="border: 0 none; border-collapse: separate;">\
                        <td style="border: 0 none; border-collapse: separate; vertical-align: middle;" valign="middle">© 2022 BeeReign - All rights reserved.</td>\
                      </tr>\
                    </tbody>\
                  </table>\
                </td>\
              </tr>\
            </tbody>\
        </td>\
      </tr>\
    </tbody>\
  </table>\
  </body>`;
}

module.exports = recoveryTemplate;
