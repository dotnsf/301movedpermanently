# 301 Moved Permanently


## Overview

Sample application which just returns 301 status code.


## Env values

- `URL` : forwarded/redirected (new) URL

  - `$ URL=https://new.target.url/ node app`

    - `https://new.target.url/` = forwarded/redirected (new) URL.

    - Default value: `https://www.google.com`.

    - Edit and replace `package.json` if you need it.

- `POST_REDIRECT` : To redirect with 308 staus for POST/PUT/DELETE method

  - `$ POST_REDIRECT=1 URL=https://new.target.url/ node app`

    - Default value: 0(no redirect).

    - Edit and replace `package.json` if you need it.

## Reference

https://developer.mozilla.org/ja/docs/Web/HTTP/Status/301


## Licensing

This code is licensed under MIT.


## Copyright

2022  [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
