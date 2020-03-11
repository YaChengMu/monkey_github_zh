var I18N = {};

I18N.conf = {
  /**
   * 要翻译的页面正则
   */
  rePageClass: /\b(vis-public|page-(dashboard|profile|account|new-repo|create-org)|homepage|signup|session-authentication|oauth)\b/,
  
  /**
   * 匹配 pathname 页面的正则
   *
   * 通知页面 /notifications
   * 关注页面 /watching
   * 点赞页面 /stars
   * 问题页面 /issues
   * 拉取请求 /pulls
   * 搜索页面 /search
   * 趋势页面 /trending
   * 展示页面 /showcases
   * 导入仓库 /new/import
   *
   * 未登录首页 /
   */
  rePagePath: /\/(notifications|watching|stars|issues|search|pulls|trending|showcases|$|new\/import)/,
  
  /**
   * 匹配 url 页面的正则
   *
   * 代码片段页面 gist
   */
  rePageUrl: /(gist)\.github.com/,
  
  /**
   * 忽略区域的 class 正则
   *
   * 面包屑 breadcrumb
   * 文件列表 files js-navigation-container js-active-navigation-container
   * 代码高亮 highlight tab-size js-file-line-container
   * 代码差异 data highlight blob-wrapper
   * wiki内容 markdown-body
   */
  reIgnore: /(breadcrumb|files js-navigation-container|highlight tab-size|highlight blob-wrapper|markdown-body)/,
};

I18N.zh = {
  "title": { // 标题翻译
    "static": { // 静态翻译
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "pubilc": { // 公共区域翻译
    "static": { // 静态翻译
      // 未登录部分
      
      // 评论编辑器翻译
      
      // 公共动作词
      
      // 邮箱验证提示
    },
    "regexp": [ // 正则翻译 (公共区域正则会二次调用翻译，为了弥补部分翻译的情况)
      /**
       * 匹配时间格式
       *
       * Mar 19, 2015 – Mar 19, 2016
       * January 26 – March 19
       * March 26
       *
       * 不知道是否稳定, 暂时先试用着. 2016-03-19 20:46:45
       */
      [/(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May(?:)?|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?) (\d+)(?:, (\d+)|)/g, function (all, month, date, year) {
        var monthKey = {
          "Jan": "1月",
          "Feb": "2月",
          "Mar": "3月",
          "Apr": "4月",
          "May": "5月",
          "Jun": "6月",
          "Jul": "7月",
          "Aug": "8月",
          "Sep": "9月",
          "Oct": "10月",
          "Nov": "11月",
          "Dec": "12月"
        };
        return (year ? year + '年' : '') + monthKey[month.substring(0, 3)] + date + '日';
      }],
      /**
       * 相对时间格式处理
       */
      [/just now|(an?|\d+) (second|minute|hour|day|month|year)s? ago/, function (m, d, t) {
        if (m === 'just now') {
          return '刚刚';
        }
        
        if (d[0] === 'a') {
          d = '1';
        } // a, an 修改为 1
        
        var dt = {second: '秒', minute: '分钟', hour: '小时', day: '天', month: '个月', year: '年'};
        
        return d + ' ' + dt[t] + '之前';
      }],
      
      // 仓库删除提示
      [/Your repository "([^"]+)"was successfully deleted\./, "您的 \"$1\"仓库已被成功删除。"],
      // 邮箱验证提示
      [/An email containing verification instructions was sent to (.+)\./, "验证邮件已发送到 $1。"],
      // 头像下面的注册信息
      [/Joined on/, "注册于"],
    ],
  },
  
  "page-dashboard": { // 已登录的首页
    "static": { // 静态翻译
      // 新手帮助
      
      // 已有仓库的项目
      
      // 动态 状态词
      
      // 首次加入组织通知
    },
    "regexp": [ // 正则翻译
      [/Show (\d+) more repositories…/, "显示 $1 个更多的仓库…"],
    ],
  },
  
  "page-profile": { // 个人首页
    "static": { // 静态翻译
      
      // 动态 状态词
      
      // 仓库 tab
    },
    "regexp": [ // 正则翻译
      [/Created (\d+)[\s\r\n]+commits? in[\s\r\n]+(\d+)[\s\r\n]+repositor(y|ies)/, "在 $2 个库中创建了 $1 次提交"],
      [/Created (\d+)[\s\r\n]+repositor(y|ies)/, "创建了 $1 个仓库"],
      [/Opened (\d+)[\s\r\n]+other[\s\r\n]+pull requests?/, "发起了 $1 个拉取请求"],
      [/Opened (\d+)[\s\r\n]+other[\s\r\n]+issues/, "开了 $1 个其他问题"],
      [/(\d+) commits?/, "$1 次提交"],
      [/Pushed (\d+) commits? to/, "推送了 $1 次提交到"],
      [/Follow ([^’]+)’s activity feed/, "关注 $1 的 feed"],
      [/([^ ]+) has no activity during this period\./, "$1 近期没有任何活动。"],
      [/([\s\S]+?) has no activity yet for this period\./, "$1 近期没有任何活动。"],
      [/(\d+) total/, "$1 次"],
      [/(\d+) days?/, "$1 天"],
      [/([\d,]+) contributions in the last year/, "$1 次贡献在过去的一年中"],
    ],
  },
  
  "page-account": { // 个人设置
    "static": { // 静态翻译
      // 菜单
      
      // Profile 菜单
      
      
      // Account settings 菜单
      
      // Emails 菜单
      
      // Notification center 菜单
      
      // Billing 菜单
      
      // Security 菜单
      
      // Applications 菜单
      
      // Personal access tokens 页面
      
      // Organizations 页面
    },
    "regexp": [ // 正则翻译
      [/This email will not be used as the 'from' address for web-based GitHub operations - we will instead use ([^@]+@users.noreply.github.com)./, "该邮箱不会被用作 \"发件人\"地址，我们会改用 ($1) 作为默认 \"发件人\"地址。"],
      [/Your primary email was changed to ([^@]+@[^\n]+)\./, "您的 Email 主帐户已经更改为 $1"],
      [/(\d+) private repositories?\./, "$1 个私有仓库."],
      [/(\d+) data packs?/, "$1 数据包"],
      [/(\d+) days? left,\n\s+billed monthly/, "$1天, 按月"],
      [/Using\n\s+([\d.]+) of\n\s+(\d+) GB\/month/, "＄$1, $2GB/月"],
      [/Using\n\s+([\d.]+) of\n\s+(\d+) GB/, "＄$1, $2GB"],
      [/(\d+) Authorized applications?/, "$1 个授权应用"],
      [/Turn (\w+) into an organization/, "变更 $1 为一个组织"],
      [/You will no longer be able to sign into (\w+) \(all administrative privileges will be bestowed upon the owners you choose\)/, "您将不能作为账户登录到 $1。（所有管理权限将赋予您选择的所有者）"],
      [/Any commits credited to (\w+) will no longer be linked to this GitHub account/, "任何提交归功于 $1 将不再链接到这个 GitHub 帐户"],
      [/If you are using (\w+) as a personal account, you should/, "如果您正在使用 $1 作为个人帐户，您应"],
      [/before transforming (\w+) into an organization./, "在转化 $1 组织之前。"],
    ],
  },
  
  "page-new-repo": { // 新建仓库
    "static": { // 静态翻译
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "new/import": { // 导入仓库
    "static": { // 静态翻译
      // 第一页
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "page-create-org": { // 新建组织
    "static": { // 静态翻译
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "vis-public": { // 仓库页
    "static": { // 静态翻译
      // 导入仓库 第二页
      
      // 仓库页面
      
      // 仓库描述编辑
      
      // 关注通知设置
      
      // 关注者页面
      
      // 点赞者页面
      
      // issues 页面
      
      // New collaborator 页面
      
      // Upload files 页面
      
      // Find file 页面
      
      // 拉取请求信息提示
      
      // Pull Requests 页面
      
      //// 直接提交拉取请求
      
      // projects 页面
      
      // wiki 页面

      // settings 页面
      
      // Compare changes 页面
      
      // 新建空仓库
      
      // commits 页面
      
      // branches 页面
      
      // Releases 页面
      
      // 图表页面
    },
    "regexp": [ // 正则翻译
      [/HTTPS\s+(recommended)/, "HTTPS (推荐)"],
      [/Save (.+?) to your computer and use it in GitHub Desktop./, "使用 GitHub 桌面版，保存 $1 到您的电脑。"],
      [/([\d,]+) Open/, "$1 个开放的"],
      [/([\d,]+) Closed/, "$1 个关闭的"],
      [/View all issues opened by (.+)/, "查看所有 $1 的问题"],
      [/Welcome to the ([^ ]+) wiki!/, "欢迎访问 $1 的 wiki"],
      [/([\d,]+) participants?/, "$1 参与者"],
      [/Commits on (.+)/, "提交于 $1"],
      // bug [/from (.+)/, "从 $1"],
      [/wants to merge ([\d,]+) commits? into/, "需要合并 $1 次提交到"],
      [/([\d,]+) commits?/, "$1 次提交"],
      [/to ([^\n]+)[\n\s]+since this release/, "到 $1 分支在此发布中。"],
      [/· ([\d,]+) comments?/, "$1 次提交"]
    ],
  },
  
  "homepage": { // 未登录首页
    "static": { // 静态翻译
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "session-authentication": { // 登录页
    "static": { // 静态翻译
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "signup": { // 注册页
    "static": { // 静态翻译
      // Step 1:
      
      // Step 2:
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "notifications": { // 通知页面
    "static": { // 静态翻译
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "watching": { // 关注的仓库页面
    "static": { // 静态翻译
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "stars": { // 点赞页面
    "static": { // 静态翻译
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "trending": { // 趋势页面
    "static": { // 静态翻译
    },
    "regexp": [ // 正则翻译
      [/([\d,]+) stars today([^B]+)[\w ]+/, "今天 $1 赞$2创建者"],
      [/([\d,]+) stars this week([^B]+)[\w ]+/, "本周 $1 赞$2创建者"],
      [/([\d,]+) stars this month([^B]+)[\w ]+/, "本月 $1 赞$2创建者"],
    ],
  },
  
  "showcases": { // 展示页面
    "static": { // 静态翻译
    },
  },
  
  
  "issues": { // 问题页面
    "static": { // 静态翻译
    },
    "regexp": [ // 正则翻译
      [/(\d+) Open/, "$1 未处理"],
      [/(\d+) Closed/, "$1 已处理"],
    ],
  },
  
  
  "search": { // 搜索页面
    "static": { // 静态翻译
        "Search more than":"搜索超过",
        "users":"用户",
        "issues":"问题",
      // 高级搜索
    },
    "regexp": [ // 正则翻译
      [/We’ve found ([\d,]+) repository results/, "我们为您找到 $1 个相关结果"],
      [/We couldn’t find any repositories matching '(.+)'/, "我们没有找到任何与 '$1' 相关的结果"],
    ],
  },
  
  
  "gist": { // 代码片段页面
    "static": { // 静态翻译
      // All gists 页面
      
      // View 代码 页面
      
      // 代码页面
      
      // 修订页面
      
      // 编辑代码页面
      
      // 已赞页面
    },
    "regexp": [ // 正则翻译
      [/View ([^ ]+) on GitHub/, "查看 $1 的 GitHub"],
      [/(\d+) files?/, "$1 文件"],
      [/(\d+) forks?/, "$1 派生"],
      [/(\d+) comments?/, "$1 评论"],
      [/(\d+) stars?/, "$1 赞"],
      [/Save (.+?) to your computer and use it in GitHub Desktop./, "使用 GitHub 桌面版，保存 $1 到您的电脑。"],
    ],
  },
  
  "oauth": { // 应用授权
    "static": { // 静态翻译
    },
    "regexp": [ // 正则翻译
    ],
  },
};


// 公共复用翻译部分
I18N.zh.pulls = I18N.zh.issues;
