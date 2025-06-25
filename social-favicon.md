### 1. 自定义社交媒体链接

#### 支持的平台图标（内置）

**技术平台：**
- GitHub, GitLab, Stack Overflow, Dev.to, CodePen

**社交媒体：**
- Twitter, Facebook, Instagram, LinkedIn, TikTok, YouTube

**中国平台：**
- 微博, 微信, QQ, 知乎, 豆瓣, B站

**通讯工具：**
- 邮箱, Telegram, WhatsApp, Discord

**设计平台：**
- Behance, Dribbble

**其他：**
- RSS, Website, Blog

#### JSON配置格式

```json
{
  "social": [
    {
      "name": "GitHub",
      "url": "https://github.com/yourusername", 
      "icon": "github"
    },
    {
      "name": "个人博客",
      "url": "https://yourblog.com",
      "icon": "blog"
    },
    {
      "name": "自定义平台",
      "url": "https://custom.com",
      "icon": "custom",
      "iconSvg": "<svg viewBox='0 0 24 24' fill='currentColor'>...your svg...</svg>"
    }
  ]
}
```

### 2. Favicon功能

#### 支持的尺寸和格式

- **16x16px** - 浏览器标签页
- **32x32px** - 任务栏快捷方式  
- **48x48px** - Windows快捷方式
- **180x180px** - Apple Touch Icon
- **192x192px** - Android主屏幕
- **512x512px** - 高分辨率显示

#### 配置选项

```json
{
  "favicon": {
    "enabled": true,
    "baseIcon": "https://your-icon-url.com/icon.png"
  }
}
```

## 完整配置示例

```json
{
  "name": "张三",
  "title": "全栈开发工程师",
  "avatar": "https://via.placeholder.com/100/4a90e2/ffffff?text=张",
  "websites": [
    {"name": "个人博客", "url": "https://blog.example.com"},
    {"name": "GitHub项目", "url": "https://github.com/example"},
    {"name": "作品集", "url": "https://portfolio.example.com"}
  ],
  "bio": "热爱技术的全栈开发者，专注于前端和后端技术的研究与实践。",
  "social": [
    {"name": "GitHub", "url": "https://github.com/example", "icon": "github"},
    {"name": "Twitter", "url": "https://twitter.com/example", "icon": "twitter"},
    {"name": "邮箱", "url": "mailto:example@email.com", "icon": "email"},
    {"name": "微博", "url": "https://weibo.com/example", "icon": "weibo"},
    {"name": "LinkedIn", "url": "https://linkedin.com/in/example", "icon": "linkedin"},
    {"name": "YouTube", "url": "https://youtube.com/channel/example", "icon": "youtube"},
    {"name": "知乎", "url": "https://zhihu.com/people/example", "icon": "zhihu"},
    {"name": "Discord", "url": "https://discord.gg/example", "icon": "discord"}
  ],
  "favicon": {
    "enabled": true,
    "baseIcon": "https://via.placeholder.com/512/4a90e2/ffffff?text=张"
  }
}
```

## 自定义图标

### 使用自定义SVG图标

如果内置图标库中没有您需要的平台，可以使用自定义SVG：

```json
{
  "name": "特殊平台",
  "url": "https://special-platform.com/profile",
  "icon": "custom",
  "iconSvg": "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z'/></svg>"
}
```

### 图标设计要求

- **格式：** SVG
- **视图框：** `viewBox="0 0 24 24"`
- **颜色：** 使用 `currentColor` 以支持主题切换
- **尺寸：** 矢量格式，自动适配
- **风格：** 简洁清晰，适合小尺寸显示