import { getComponents } from '@brushes/qj-simulate-component';
import React from 'react';
const { Swiper } = await getComponents();
console.log(Swiper)


export default () => {
  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div

        style={{ background: color,
          height: 120,
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 48
      }}
      >
        {index + 1}
      </div>
    </Swiper.Item>
  ));

  return <Swiper>{items}</Swiper>
}
// import React, {useEffect} from 'react';
//
//
// export const Text = () => {
//   useEffect(() => {
//     (async () => {
//       console.log('9===>', components)
//     })()
//   }, []);
//
//   return (
//     <>
//       123123123213
//     </>
//   )
// }
