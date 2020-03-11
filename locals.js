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
I18N.zh.pulls = I18N.zh.issues;的历史仓库内容",
      
      "Newer": "新的",
      "Older": "旧的",
      
      // branches 页面
      "Overview": "概述",
      "Yours": "您的",
      "Active": "活跃的",
      "Stale": "陈旧的",
      "All branches": "所有分支",
      "Search branches…": "搜索分支…",
      
      "Your branches": "您的分支",
      "You haven’t pushed any branches to this repository.": "您没有推送任何分支到该仓库。",
      "Active branches": "活跃的分支",
      "There aren’t any active branches.": "没有任何活跃的分支。",
      "Stale branches": "陈旧的分支",
      "There aren’t any stale branches.": "没有任何陈旧的分支。",
      "View more active branches": "查看更多活跃的分支",
      "View more stale branches": "查看更多陈旧的分支",
      "Compare": "比较",
      "Change default branch": "更改默认分支",
      
      // Releases 页面
      "Releases": "发布",
      "Pre-release": "预发布",
      "Downloads": "下载",
      "Notes": "说明",
      "There aren’t any releases here": "没有任何发布内容",
      "Create a new release": "创建一个发布",
      "Releases are powered by": "发布是通过在仓库中标记",
      "tagging specific points of history": "特定历史版本",
      "in a repository. They’re great for marking release points like": "，用于发布的版本类似",
      
      "Latest release": "最新发布",
      "Read release notes": "阅读发布说明",
      "released this": "发布它",
      "tagged this": "标注",
      
      "Draft a new release": "起草新版本发布",
      "Add release notes": "添加发布说明",
      "Edit release notes": "编辑发布说明",
      "(No release notes)": "(没有发布说明)",
      "Release notes": "发布说明",
      
      "Edit tag": "修改标签",
      "Edit release": "修改发布",
      "Delete": "删除",
      "Are you sure?": "您确定一定以及肯定吗？",
      "This will delete the information for this tag.": "将删除该标签的所有信息。",
      "Delete this tag": "删除此标签",
      "Your tag was removed": "标签删除成功！",
      
      "Existing tag": "已存在的标签",
      "Markdown supported": "Markdown 语法支持",
      "Attach binaries by dropping them here or": "拖拽文件到这来添加附件",
      "This is a pre-release": "这是一个预发布版本",
      "We’ll point out that this release is identified as non-production ready.": "我们会指定该版本为未正式发布。",
      "Update release": "更新发布",
      "Publish release": "发布版本",
      "Save draft": "保存草稿",
      "Saved!": "已保存",
      "Saving draft failed. Try again?": "保存失败，再试一次？",
      
      // 图表页面
      "Contributors": "贡献者",
      "Traffic": "流量",
      "Commits": "提交",
      "Code frequency": "频率",
      "Punch card": "时刻",
      "Network": "网络",
      "Members": "成员",
      
      "Contributions to master, excluding merge commits": "对主分支的贡献，不包括合并提交",
      "Contributions:": "贡献者:",
      "Filter contributions": "筛选贡献者",
      "Additions": "添加数量",
      "Deletions": "删除数量",
      
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
      "Pick a username": "选择一个用户名",
      "Your email address": "您的邮件地址",
      "Create a password": "创建一个密码",
      "Sign up for GitHub": "注册 GitHub",
      
      "Use at least one letter, one numeral, and seven characters.": "密码需要字母和数字组成的 7 位以上字符串。",
      "By clicking \"Sign up for GitHub\", you agree to our": "点击 “注册 GitHub”，表示您同意我们的",
      "terms of service": "服务条款",
      "and": "和",
      "privacy policy": "隐私政策条款",
      "We'll occasionally send you account related emails.": "我们会偶尔发送您的帐户相关的电子邮件。",
      
      "How people build software": "人们如何构建软件",
      "Millions of developers use GitHub to build personal projects, support their businesses, and work together on open source technologies.": "数以百万计的开发人员使用 GitHub 建立个人项目，支持他们的企业，共同在开放源码技术。",
      
      "Introducing unlimited": "引入无限制的",
      "private repositories": "私人仓库",
      "All of our paid plans on GitHub.com now include unlimited private repositories.": "所有在我们 GitHub.com 上的付费用户，我们将提供无限制的私人仓库。",
      "Sign up": "注册",
      "to get started or": "开始使用或",
      "read more about this change on our blog": "阅读更多信息在我们的博客上",
      
      "Welcome home, developers": "欢迎回来，开发者们",
      "GitHub fosters a fast, flexible, and collaborative development process that lets you work on your own or with others.": "GitHub 提供了一个快速，灵活和协作开发过程，让您对自己或与他人合作。",
      
      "For everything you build": "为您打造",
      "Host and manage your code on GitHub. You can keep your work private or share it with the world.": "主机和管理您的代码在 GitHub 上。您可以把您的工作或私人与世界分享。",
      "A better way to work": "一个更好的工作方式",
      "From hobbyists to professionals, GitHub helps developers simplify the way they build software.": "从业余爱好者到专业人士，GitHub 帮助开发人员简化的方式构建软件。",
      "Millions of projects": "数以百万计的项目",
      "GitHub is home to millions of open source projects. Try one out or get inspired to create your own.": "GitHub 是数百万开源项目的家园。尝试一个或获得灵感来创造您自己的项目。",
      "One platform, from start to finish": "一个平台，从始至终",
      "With hundreds of integrations, GitHub is flexible enough to be at the center of your development process.": "成百上千的集成，GitHub 是足够灵活的，能够在您的发展过程的中心。",
      
      "Who uses GitHub?": "谁在使用 GitHub ?",
      "Individuals": "个人",
      "Use GitHub to create a personal project, whether you want to experiment with a new programming language or host your life’s work.": "使用 GitHub 来创建一个个人项目，不管您想要尝试一个新的编程语言或主机在您生活及工作。",
      "Communities": "社区",
      "GitHub hosts one of the largest collections of open source software. Create, manage, and work on some of today’s most influential technologies.": "GitHub 主机是最大的开放源码软件的集合之一。创建，管理，以及在一些当今最具影响力的技术工作。",
      "Businesses": "企业",
      "Businesses of all sizes use GitHub to support their development process and securely build software.": "各种规模的企业使用的 GitHub 支持其发展过程中，安全地构建软件。",
      
      "GitHub is proud to host projects and organizations like": "GitHub 是自豪地举办项目和组织，如",
      "Public projects are always free. Work together across unlimited private repositories for $7 / month.": "公共项目是免费的。私人项目需要支付 7 美元一个月的费用。",
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "session-authentication": { // 登录页
    "static": { // 静态翻译
      "Sign in to GitHub": "登录 GitHub 帐户",
      "Username or email address": "用户名/邮箱",
      "Password": "密码",
      "Forgot password?": "忘记密码",
      "Sign in": "登录",
      "New to GitHub?": "第一次来 GitHub?",
      "Create an account": "那就注册个帐户吧",
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "signup": { // 注册页
    "static": { // 静态翻译
      "Join GitHub": "加入 GitHub",
      "The best way to design, build, and ship software.": "最优的方式来设计、构建和存储软件",
      
      "Step 1:": "第一步:",
      "Set up a personal account": "建立个人账户",
      "Step 2:": "第二步:",
      "Choose your plan": "选择您的方案",
      "Step 3:": "第三步:",
      "Go to your dashboard": "去到您的首页",
      
      // Step 1:
      "Create your personal account": "创建您的个人账户",
      "Username": "用户名 (也是您个人首页的二级地址)",
      "This will be your username — you can enter your organization’s username next.": "这将是您的用户名 - 也可以是您组织或公司的名称。",
      "Email Address": "Email 地址",
      "You will occasionally receive account related emails. We promise not to share your email with anyone.": "该邮箱用于接收相关的通知邮件。我们承诺不公开您的电子邮件给任何人。",
      "Password": "密码",
      "Use at least one lowercase letter, one numeral, and seven characters.": "密码需要字母和数字组成的 7 位以上字符串。",
      "By clicking on \"Create an account\" below, you are agreeing to the": "点击下面的“创建账户”，表示您同意我们的",
      "Terms of Service": "服务条款",
      "and the": "和",
      "Privacy Policy": "隐私政策",
      "Create an account": "创建账户",
      
      "You’ll love GitHub": "您将会爱上 GitHub",
      "Unlimited": "无限多的",
      "collaborators": "合作者",
      "public repositories": "公共仓库",
      "Great communication": "良好的沟通",
      "Friction-less development": "无摩擦开发",
      "Open source community": "开源社区",
      
      // Step 2:
      "Welcome to GitHub": "欢迎来到 GitHub",
      "You’ve taken your first step into a larger world,": "您已经迈出了第一步进入到更大的世界，",
      "Choose your personal plan": "选择您的个人方案",
      "Unlimited public repositories for free.": "无限的公共仓库免费使用",
      "Unlimited private repositories": "无限的私人仓库",
      "for": "需",
      "$7/month.": "$7/月",
      "¥46.06/month.": "¥46.06/月.",
      "(view in CNY)": "(显示人民币价格)",
      "(view in USD)": "(显示美元价格)",
      "Don’t worry, you can cancel or upgrade at any time.": "别担心，你可以随时升级或取消这个方案。",
      "Charges to your account will be made in ": "汇率问题说明，不翻译了...",
      "Secure": "安全",
      "Enter your billing details": "输入您的帐单明细",
      "Pay with": "支付方式",
      "Credit card": "信用卡",
      "PayPal account": "PayPal 账户",
      "Credit card number": "信用卡号",
      "Accepted cards": "支持的卡",
      "Help me set up an organization next": "帮我建立一个组织",
      "Organizations are separate from personal accounts and are best suited for businesses who need to manage permissions for many employees.": "组织是独立于个人账户，是最适合需要管理权限对许多员工的企业。",
      "Learn more about organizations.": "阅读更多关于组织的信息。",
      "Finish sign up": "完成注册",
      
      "Both plans include:": "这两种方案包括：",
      "Collaborative code review": "协作代码审查",
      "Issue tracking": "问题跟踪",
      "Unlimited public repositories": "无限制的公共仓库",
      "Join any organization": "加入任何组织",
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "notifications": { // 通知页面
    "static": { // 静态翻译
      "Mark all as read": "全部标为已读",
      "Are you sure?": "您确定吗？",
      "Are you sure you want to mark all unread notifications as read?": "你确定要将所有的未读通知标记为已读？",
      "Mark all notifications as read": "全部标为已读",
      
      "Notifications": "通知",
      "Watching": "关注的仓库",
      "Unread": "未读",
      "Participating": "参与话题",
      "All notifications": "所有通知",
      
      "No new notifications.": "没有新的通知。",
      "Depending on": "根据",
      "your notification settings": "您的通知设置",
      ", you’ll see updates here for your conversations in watched repositories.": "，您将看到您关注仓库的更新信息。",
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "watching": { // 关注的仓库页面
    "static": { // 静态翻译
      "Notifications": "通知",
      "Watching": "关注的仓库",
      
      "Watched repositories": "关注的仓库",
      "Sorted by most recently watched.": "按最近关注排序",
      "Unwatch all": "取消所有关注",
      "Notification settings": "通知设置",
      "You can change how you receive notifications from your account settings.": "您可以修改接收通知的方式。",
      "Change notification settings": "修改通知设置",
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "stars": { // 点赞页面
    "static": { // 静态翻译
      "All stars": "所有仓库",
      "Your repositories": "您的仓库",
      "Others' repositories": "其他仓库",
      
      "Filter by languages": "筛选语言",
      "Jump to a friend": "去好基友那",
    },
    "regexp": [ // 正则翻译
    ],
  },
  
  "trending": { // 趋势页面
    "static": { // 静态翻译
      "Trending in open source": "开源趋势",
      "See what the GitHub community is most excited about today.": "看看 GitHub 社区今天最受关注的项目。",
      "See what the GitHub community is most excited about this week.": "看看 GitHub 社区本周最受关注的项目。",
      "See what the GitHub community is most excited about this month.": "看看 GitHub 社区本月最受关注的项目。",
      
      "Trending developers": "开发者趋势",
      "These are the organizations and developers building the hot tools today.": "这是今天创建热门项目的组织和开发人员。",
      "These are the organizations and developers building the hot tools this week.": "这是本周创建热门项目的组织和开发人员。",
      "These are the organizations and developers building the hot tools this month.": "这是本月创建热门项目的组织和开发人员。",
      
      "Repositories": "仓库",
      "Developers": "开发者",
      
      "Trending:": "趋势:",
      "Adjust time span": "调整的时间跨度",
      "today": "今天",
      "this week": "本周",
      "this month": "本月",
      
      "All languages": "所有语言",
      "Unknown languages": "未知语言",
      
      "Other:": "其他:",
      "Languages": "语言",
      "Other Languages": "其他语言",
      "Filter Languages": "筛选语言",
    },
    "regexp": [ // 正则翻译
      [/([\d,]+) stars today([^B]+)[\w ]+/, "今天 $1 赞$2创建者"],
      [/([\d,]+) stars this week([^B]+)[\w ]+/, "本周 $1 赞$2创建者"],
      [/([\d,]+) stars this month([^B]+)[\w ]+/, "本月 $1 赞$2创建者"],
    ],
  },
  
  "showcases": { // 展示页面
    "static": { // 静态翻译
      "Open source showcases": "开源展示",
      "Browse popular repositories based on the topic that interests you most.": "浏览热门仓库基于你最感兴趣的话题。",
      "Search showcases": "搜索展示",
    },
  },
  
  
  "issues": { // 问题页面
    "static": { // 静态翻译
      "Created": "已创建",
      "Assigned": "已分配",
      "Mentioned": "提到的",
      
      "Visibility": "可见性",
      "Repository visibility": "仓库可见性",
      "Private repositories only": "只有私有仓库",
      "Public repositories only": "只有公共库",
      
      "Organization": "组织",
      "Filter by organization or owner": "通过组织或所有者筛选",
      "Filter organizations": "筛选组织",
      
      "Sort": "排序",
      "Sort by": "排序方式",
      "Newest": "最新的",
      "Oldest": "最老的",
      "Most commented": "最多评论",
      "Least commented": "最少评论",
      "Recently updated": "最近更新",
      "Least recently updated": "最早更新",
      "Most reactions": "最多回应",
      
      "No results matched your search.": "没有符合您的搜索结果。",
      "Use the links above to find what you’re looking for, or try": "使用上面的链接找到您要找的内容，或尝试",
      "a new search query": "新的搜索查询",
      ". The Filters menu is also super helpful for quickly finding issues most relevant to you.": "。过滤菜单也是快速找到问题最相关的您超级有帮助的。",
      "ProTip!": "专业提示！",
      "Updated in the last three days": "更新了最后三天：",
    },
    "regexp": [ // 正则翻译
      [/(\d+) Open/, "$1 未处理"],
      [/(\d+) Closed/, "$1 已处理"],
    ],
  },
  
  
  "search": { // 搜索页面
    "static": { // 静态翻译
      "Search more than": "这里有超过",
      "repositories": "的仓库供您搜索",
      
      
