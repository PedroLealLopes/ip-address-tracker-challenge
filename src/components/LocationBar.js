import React from 'react'

function LocationBar({location:{ip,region,city,timezone,isp } }) {
  return (
    <div className='info-container'>
      <div className='info-item'>
        <h6>IP ADDRESS</h6>
        {ip ? ip : ''}
      </div>
      <div className='info-divider' />
      <div className='info-item'>
        <h6>Location</h6> {(city ? city + ', ' : '' ) + (region ? region : '' )}
      </div>
      <div className='info-divider' />
      <div className='info-item'>
        <h6>Timezone</h6>{timezone ? 'UTC ' + timezone : ''}
      </div>
      <div className='info-divider' />
      <div className='info-item'>
        <h6>ISP</h6>
        {isp ? isp : ''}
      </div>
    </div>
  )
}

export default LocationBar