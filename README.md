# Nike+ Dashing widget.

[Nike+](http://nikeplus.nike.com/plus/) widget for [Dashing](http://fabiocaseri.github.io/dashing-js), ported from [@danillotuhumury's work](https://github.com/danillotuhumury/nikeplus-dashing-widget). It displays your last activity data (NikeFuel points, calories, distance and duration). All of the previously mentioned options are shown in a slideshow. Examples of the widget can be viewed [below](https://github.com/fabiocaseri/nikeplus-dashing-js-widget#preview).
Ported from [@danillotuhumury's work](https://github.com/danillotuhumury/nikeplus-dashing-widget)

## Installation

```shell
$ dashing-js install https://github.com/fabiocaseri/nikeplus-dashing-js-widget/archive/master.zip
```

## Usage

To actually use the widget on your own Dashboard, you'll have to [request](https://developer.nike.com) an Access Token from Nike+ (Nike didn't release the OAuth API yet.). With this Access Token you'll be able to retrieve data from you Nike+ account.

To include the widget on your dashboard, add the following snippet to the dashboard layout file:

```html
    <li data-row="1" data-col="1" data-sizex="1" data-sizey="1">
      <div data-id="nikeplus" data-view="Nikeplus"></div>
    </li>
```

On to the next part, rename the file `jobs/nikeplus_access_token.js.sample` in `jobs/nikeplus_access_token.js` and enter the Access Token:

```javascript
// You Nike+ access token
var access_token = 'YOUR_ACCESS_TOKEN_HERE';
```

## Preview
![fuel](https://f.cloud.github.com/assets/1248374/370342/396f97f8-a2ef-11e2-815f-d9246828212d.png) 
![distance](https://f.cloud.github.com/assets/1248374/370344/397bf476-a2ef-11e2-8fb5-3795f642ff05.png)
