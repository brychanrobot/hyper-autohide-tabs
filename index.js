const fs = require('fs')
const path = require('path')

let styles = ''

try {
  styles = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8')
} catch (err) {
  throw err
}

exports.decorateConfig = config => Object.assign({}, config, {
  css: (config.css || '') + styles
})

exports.getTabsProps = (parentProps, props) => {
  const bodyClasses = document.body.classList

  if (props.tabs.length <= 1) {
	console.log("one tab")
    bodyClasses.add('closed-tabs')
  } else {
    bodyClasses.remove('closed-tabs')
  }

  return Object.assign({}, parentProps, props)
}
