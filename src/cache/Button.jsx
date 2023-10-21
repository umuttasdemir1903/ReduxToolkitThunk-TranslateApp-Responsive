import React,{memo} from 'react'

const Button = ({handleClick}) => {
    console.log('ekrana basildi');
  return (
    <div>
      <button onClick={handleClick}>İnc</button>
    </div>
  )
}

// bileşeni hafızada tutar.
export default React.memo(Button)
