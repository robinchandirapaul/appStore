import './index.css'

const TabItem = props => {
  const {tabDetails, displayId, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeStyle = isActive ? 'active' : ''

  const onClickDisplay = () => {
    displayId(tabId)
  }

  return (
    <li className="tab-list-container">
      <button
        type="button"
        className={`${activeStyle} tab-btn`}
        onClick={onClickDisplay}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
