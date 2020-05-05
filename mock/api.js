import header from './header'
import navleft from './navleft'
import consoleFinance from './consoleFinance'
import consoleTrade from './consoleTrade'
import consoleAccount from './consoleAccount'
import newsTodo from './newsTodo'
import articalColumn from './articalColumn'
import articalManage from './articalManage'
import articalCreate from './articalCreate'
import customManage from './customManage'
import editCustom from './editCustom'
import editAccount from './editAccount'
import approvalOpen from './approvalOpen'
import approvalDeposit from './approvalDeposit'
import stepForm from './stepForm'
import settingRole from './settingRole'
import settingGroup from './settingGroup'

export default {
    '/api/header': header,
    '/api/navleft': navleft,
    '/api/console/finance':consoleFinance,
    '/api/console/trade': consoleTrade,
    '/api/console/account': consoleAccount,
    '/api/news/todo' : newsTodo,
    '/api/artical/column':articalColumn,
    '/api/artical/manage':articalManage,
    '/api/artical/manage/create':articalCreate,
    '/api/custom/management':customManage,
    '/api/custom/editCustom':editCustom,
    '/api/custom/editAccount':editAccount,
    '/api/approval/open': approvalOpen,
    '/api/approval/deposit':approvalDeposit,
    '/api/approval/stepForm': stepForm,
    '/api/setting/role':settingRole,
    '/api/setting/group':settingGroup,
}