var config = {
  key: 'F73605D25B6E98673550D890258250B6',
  cast: {
    enable: true
  }
};

var source = {
  dash: 'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd',
  hls: 'http://d1rlbhvkfp3998.cloudfront.net/out/v1/f12e90a266454d2d9cb83ece0710ce22/speke_el_hls.m3u8',
  smooth: 'https://test.playready.microsoft.com/smoothstreaming/SSWSS720H264/SuperSpeedway_720.ism/manifest',
  drm: {
    widevine: {
      LA_URL: 'http://authorization.nowonline.com.br:8080/key=30111&prm=eyJjb250ZW50SWQiOiIzMDExMSIsImtleUlkIjoiMDE0N2ZkYzUtMjI2Zi00YWJmLWFmNjgtOWZiZjI4OGU0M2ZiIn0='
    },
    playready: {
      LA_URL: 'http://authorization.nowonline.com.br:8080/key=30111&prm=eyJjb250ZW50SWQiOiIzMDExMSIsImtleUlkIjoiMDE0N2ZkYzUtMjI2Zi00YWJmLWFmNjgtOWZiZjI4OGU0M2ZiIn0='
    }
  }
};
