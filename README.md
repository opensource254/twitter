# Twitter API
![Node.js CI](https://github.com/opensource254/twitter/workflows/Node.js%20CI/badge.svg)
> This API has been created to be used by our team in order to get the latest tweets from [@MOH_kenya](https://twiiter.com/MOH_kenya).

## Quick start

* Clone this repo
* `cp .env.example .env`
* Fill the .env with your Twitter app's credentials
* `$ npm i && npm run dev` for development
* `$npm i && npm start` for production

## Endpoints

|Route                         |Method  | Description                               |
|:-----------------------------|:-------|:------------------------------------------|
| /api/v1/:username?count=20   |  GET   |  Returns :count latest tweets from a user |



## Sample Response 
```json
    {
    "id": 1264226668803231700,
    "tweet": "Turkana County enhances screening for coronavirus through community health volunteers at Loima Subcounty.\n\n#KomeshaCorona campaign. https://t.co/H3Z2QrEUJW",
    "media": [
      {
        "id": 1264225878764130300,
        "id_str": "1264225878764130304",
        "indices": [
          132,
          155
        ],
        "media_url": "http://pbs.twimg.com/media/EYtuvROXkAAkpvt.jpg",
        "media_url_https": "https://pbs.twimg.com/media/EYtuvROXkAAkpvt.jpg",
        "url": "https://t.co/H3Z2QrEUJW",
        "display_url": "pic.twitter.com/H3Z2QrEUJW",
        "expanded_url": "https://twitter.com/MOH_Kenya/status/1264226668803231748/photo/1",
        "type": "photo",
        "sizes": {
          "thumb": {
            "w": 150,
            "h": 150,
            "resize": "crop"
          },
          "large": {
            "w": 1024,
            "h": 666,
            "resize": "fit"
          },
          "small": {
            "w": 680,
            "h": 442,
            "resize": "fit"
          },
          "medium": {
            "w": 1024,
            "h": 666,
            "resize": "fit"
          }
        }
      }
    ],
    "created_at": "Sat May 23 16:08:20 +0000 2020",
    "relative_time": "8 minutes ago",
    "user": "Ministry of Health"
  },
```

## Demo
Visit this link [https://twitter.covid19kenya.site/api/v2/moh_kenya?count=20](https://twitter.covid19kenya.site/api/v2/moh_kenya?count=20) to get the latest 20 tweets from MOH Kenya

## API Documentation
You can find a detailed documentation [Here](https://documenter.getpostman.com/view/8468789/SztD4SNM)

*More features coming*

Please visit our [Guidelines](https://opensource254.github.io/guidelines)
