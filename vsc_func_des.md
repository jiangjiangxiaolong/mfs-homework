# Visual Studio Code常用功能说明
## 常用快捷键
### 编辑器与窗口管理
* 打开一个新窗口： Ctrl+Shift+N
* 关闭窗口： Ctrl+Shift+W
* 同时打开多个编辑器（查看多个文件）
新建文件 Ctrl+N
* 文件之间切换 Ctrl+Tab
* 切出一个新的编辑器（最多 3 个） Ctrl+\，也可以按住 Ctrl * 鼠标点击 Explorer 里的文件名
* 左中右 3 个编辑器的快捷键 Ctrl+1 Ctrl+2 Ctrl+3
* 3 个编辑器之间循环切换 Ctrl+
* 编辑器换位置， Ctrl+k然后按 Left或 Right
### 代码编辑
* 代码行缩进: Ctrl+[ 、 Ctrl+]
* Ctrl+C 、 Ctrl+V 复制或剪切当前行/当前选中内容
* 代码格式化： Shift+Alt+F，或 Ctrl+Shift+P 后输入 format code
* 上下移动一行： Alt+Up 或 Alt+Down
* 向上向下复制一行： Shift+Alt+Up 或 Shift+Alt+Down
* 在当前行下边插入一行: Ctrl+Enter
* 在当前行上方插入一行 Ctrl+Shift+Enter
* 移动到行首： Home
* 移动到行尾： End
* 移动到文件结尾： Ctrl+End
* 移动到文件开头： Ctrl+Home
* 移动到定义处： F12
* 定义处缩略图：只看一眼而不跳转过去 Alt+F12
* 移动到后半个括号： Ctrl+Shift+]
* 选择从光标到行尾： Shift+End
* 选择从行首到光标处： Shift+Home
* 删除光标右侧的所有字： Ctrl+Delete
* 扩展/缩小选取范围： Shift+Alt+Left 和 Shift+Alt+Right
* 多行编辑(列编辑)：Alt+Shift+鼠标左键， Ctrl+Alt+Down/Up
* 同时选中所有匹配： Ctrl+Shift+L
* Ctrl+D 下一个匹配的也被选中 (在 sublime 中是删除当前行，* 后面自定义快键键中，设置与 Ctrl+Shift+K 互换了)
* 回退上一个光标操作： Ctrl+U
* 选中所有匹配词批量编辑：鼠标高亮选中需要查找的词，按下 Ctrl + Shift + L键，即可快速选中当前文件中所有匹配的词，并在每一个词后面有一个编辑光标，可批量同步编辑
* 找到所有的引用： Shift+F12
* 同时修改本文件中所有匹配的： Ctrl+F12
* 重命名：比如要修改一个方法名，可以选中后按 F2，输入新名字，* 回车，则所有该方法的引用也都同步更新了
* 跳转到下一个 Error 或 Warning：当有多个错误时可以按 F8 逐个跳转
* 查看 diff： 在 explorer 里选择文件右键 Set file 
to compare，然后需要对比的文件上右键选择 Compare with file_name_you_chose
* 查找 Ctrl+F
* 查找替换 Ctrl+H
* 整个文件夹中查找 Ctrl+Shift+F
* 全屏：F11
* zoomIn/zoomOut：Ctrl +/-
* 侧边栏显/隐： Ctrl+B
* 显示资源管理器 Ctrl+Shift+E
* 显示搜索 Ctrl+Shift+F
* 显示 Git Ctrl+Shift+G
* 显示 Debug Ctrl+Shift+D
* 显示 Output Ctrl+Shift+U
* 自动保存：File -> AutoSave，或者 Ctrl+Shift+P，输入 auto
## 插件安装卸载
### 安装
* 点击VS Code左侧的扩展按钮
* 在应用商店中搜索框中输入想要扩展的内容，可以是一些关键信息
* 点击对应的插件，在右侧显示区域点击安装即可
### 卸载
* 和安装插件一样先进入扩展栏
* 在已启用的插件中选择想要卸载的插件或者直接根据插件名称搜索插件，然后对其进行卸载
## git集成
* 安装好git，将git的cmd添加环境变量path中
* 打开VS Code，按照步骤文件->首选项->设置，打开用户设置，配置git路径
* 重启VS Code即可