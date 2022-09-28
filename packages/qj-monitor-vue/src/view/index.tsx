import {defineComponent} from "vue";
import classNames from 'classnames';
import * as materirals from 's-material-vue'
import useMonitorVue from '../hooks';
import { _ } from '@brushes/tools';
import { ToTopOutlined, VerticalAlignBottomOutlined, DeleteOutlined } from '@ant-design/icons-vue';
const { get, noop } = _;

const MonitorVue = defineComponent({
  name: 'Monitor',
  setup() {
    const { state, switchHandler, handlerImpl } = useMonitorVue();
    return {
      state,
      switchHandler,
      handlerImpl,
    }
  },
  render() {
    const { node, actived } = this.state;
    return (
      <>
        <div className={'default-iphone'}>
          <span className={'title'}>Iphone8首屏</span>
          <span className={'line'}></span>
        </div>
        {
          node.map(({id, props, type, name}, index: number) => {
            const MaterialsComponent = get(materirals, type, noop);
            return (
              <div key={id} class={'monitor-node'}>
                {
                  actived !== id ?
                    <div class={classNames('component-name',
                      {
                        'component-name-left': index % 2,
                        'component-name-right': !(index % 2),
                      })}>
                      { name }
                    </div>
                    :
                    <div
                      onClick={(e) => this.handlerImpl(e, id, index)}
                    >
                    <OperateJsx index={index} latest={node.length -1 === index}/>
                    </div>
                }
                <div
                  onClick={() => this.switchHandler(id)}
                     class={classNames('content', {'actived': id === actived})}>
                  <MaterialsComponent id={id} {...props}/>
                </div>
              </div>
            );
          })
        }
      </>
    )
  }
})

const OperateJsx = ({ index, latest }: { index: number; latest: boolean }) => {
  return (
    <div className={classNames('icon-operate')}>
      <DeleteOutlined data-code={'delete'} style={{fontSize: '20px'}}/>
      {
        !latest && <VerticalAlignBottomOutlined data-code={'xiayi'} style={{fontSize: '20px'}}/>
      }
      {
        index !== 0 && <ToTopOutlined data-code={'shangyi'} style={{fontSize: '20px'}}/>
      }
    </div>
  )
}

export default MonitorVue;
