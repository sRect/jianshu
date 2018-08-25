import { injectGlobal } from 'styled-components'
import './static/fonts/iconfont.css'

injectGlobal`
body, html {
  font-size: 14px;
  color: #333;
}
.fl{
	float: left;
}

.fr{
	float: right;
}

.clearfix:after { content: ''; display: block; height: 0; clear: both; }
.clearfix { zoom: 1; }

// 连续英文、数字换行
.wordwrap { word-break: break-all; word-wrap: break-word; }
// 单行文字超出显示省略号
.omg{overflow: hidden; text-overflow: ellipsis; white-space:nowrap;}
`

