import {queryModelTag} from '../store';
import {useEffect, useState} from 'react';

export function usePageMode() {
  const [node, setNode] = useState([]);
  useEffect(() => {
    (async () => {
      try{
        const data = await queryModelTag({
          menuOpcode: 'index_one'
        })
        console.log(30, data);
        const list = JSON.parse(data.modelTagvalueJson)
        setNode(list);
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return node
}
