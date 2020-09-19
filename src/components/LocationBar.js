import React from 'react'

function LocationBar({ location: { ip, region, city, timezone, isp } }) {
  return (
    <div className='info-container'>
      <div className='info-item'>
        <h6>IP ADDRESS</h6>
        {ip ? ip : '192.212.174.101'}
      </div>
      <div className='info-divider' />
      <div className='info-item'>
        <h6>Location</h6>{' '}
        {(city ? city + ', ' : 'Brooklyn, ') + (region ? region : 'NY 10001')}
      </div>
      <div className='info-divider' />
      <div className='info-item'>
        <h6>Timezone</h6>
        {timezone ? 'UTC ' + timezone : 'UTC -05:00'}
      </div>
      <div className='info-divider' />
      <div className='info-item'>
        <h6>ISP</h6>
        {isp ? isp : 'SpaceX Starlink'}
      </div>
    </div>
  )
}

export default LocationBar
