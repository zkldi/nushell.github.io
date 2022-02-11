(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{767:function(e,n,t){"use strict";t.r(n);var a=t(56),o=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("h2",{attrs:{id:"nushell-configuration-with-config-nu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nushell-configuration-with-config-nu"}},[e._v("#")]),e._v(" Nushell Configuration with "),t("code",[e._v("config.nu")])]),e._v(" "),t("p",[e._v("Nushell uses a configuration system that loads a toml file at launch time. That configuration file is called the Nushell "),t("code",[e._v("config.nu")]),e._v(" file. The path to the configuration file can be found by calling "),t("code",[e._v("echo $nu.config-path")]),e._v(". It's a source file that runs, each step adding definitions, environment variables, and more to the global namespace.")]),e._v(" "),t("p",[e._v("An example of the nushell "),t("code",[e._v("config.nu")]),e._v(" can be found in our repo "),t("a",{attrs:{href:"https://github.com/nushell/engine-q/issues/459",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"configuring-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-config"}},[e._v("#")]),e._v(" Configuring "),t("code",[e._v("$config")])]),e._v(" "),t("p",[e._v("Nushell's main settings are kept in the global "),t("code",[e._v("$config")]),e._v(" variable as a record. This record can be created using:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let $config = { \n  ...\n}\n")])])]),t("p",[e._v("You can also shadow "),t("code",[e._v("$config")]),e._v(" and update it:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let $config = ($config | update <field name> <field value>)\n")])])]),t("p",[e._v("Here's an example "),t("code",[e._v("$config")]),e._v(" being configured with all known defaults:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('let $config = {\n  filesize_metric: $true\n  table_mode: rounded # basic, compact, compact_double, light, thin, with_love, rounded, reinforced, heavy, none, other\n  use_ls_colors: $true\n  color_config: {\n    separator: yd\n    leading_trailing_space_bg: white\n    header: cb\n    date: pu\n    filesize: ub\n    row_index: yb\n    hints: dark_gray\n\n    # most of these are red just so they jump out when we see them and then allow us to change the color.\n    bool: red\n    int: green\n    duration: red\n    range: red\n    float: red\n    string: red\n    nothing: red\n    binary: red\n    cellpath: red\n  }\n  use_grid_icons: $true\n  footer_mode: always #always, never, number_of_rows, auto\n  animate_prompt: $false\n  float_precision: 2\n  use_ansi_coloring: $true\n  filesize_format: "b" # b, kb, kib, mb, mib, gb, gib, tb, tib, pb, pib, eb, eib, zb, zib, auto\n  env_conversions: {\n    "PATH": {\n        from_string: { |s| $s | split row (char esep) }\n        to_string: { |v| $v | str collect (char esep) }\n    }\n  }\n  edit_mode: emacs # emacs, vi\n  max_history_size: 10000\n  log_level: error  # warn, error,  info, debug, trace\n  menu_config: {\n    columns: 4\n    col_width: 20   # Optional value. If missing all the screen width is used to calculate column width\n    col_padding: 2\n    text_style: red\n    selected_text_style: green_reverse\n    marker: "| "\n  }\n  history_config: {\n   page_size: 10\n   selector: ":"                                                                                                                          \n   text_style: green\n   selected_text_style: green_reverse\n   marker: "? "\n  }\n  keybindings: [\n  {\n    name: completion\n    modifier: control\n    keycode: char_t\n    mode: vi_insert # emacs vi_normal vi_insert\n    event: { send: menu name: context_menu }\n  }\n  {\n    name: trigger-history\n    modifier: control\n    keycode: char_x\n    mode: emacs\n    event: [\n      { send: menu name: history_menu }\n      { send: menupagenext }\n    ]\n  }\n  {\n    name: trigger-history-previous\n    modifier: control | shift\n    keycode: char_x\n    mode: emacs\n    event: [\n      { send: menu name: history_menu }\n      { send: menupageprevious }\n    ]\n  }\n  {\n    name: prev_shell\n    modifier: control\n    keycode: char_y\n    mode: vi_insert\n    event: [\n      { edit: { cmd: clear } }\n      { edit: { cmd: insertchar value: p } }\n      { send: enter }\n    ]\n  }\n  {\n    name: next_shell\n    modifier: control\n    keycode: char_u\n    mode: vi_insert\n    event: [\n      { edit: { cmd: clear } }\n      { edit: { cmd: insertchar value: n } }\n      { send: enter }\n    ]\n  }\n  {\n    name: fzf\n    modifier: control\n    keycode: char_y\n    mode: vi_insert\n    event: [\n      { edit: { cmd: clear } }\n      { edit: { cmd: insertString value: \'cd (ls | where type == dir | each {$it.name} | str collect (char nl) | fzf | decode utf-8 | str trim)\' } }\n      { send: enter }\n    ]\n  }\n  {\n    name: "until found event" \n    modifier: control\n    keycode: char_r\n    mode: vi_insert # emacs vi_normal vi_insert\n    event:[ \n      # When a list of lists is used, an UntilFound event is created. This means that the first event to be \n      # successful will be the only event to happen from the list of events for this keybinding.\n      # In this example, when pressing ctr-r the Completion event takes precedence over ContextMenu and \n      # ContextMenu takes precedence over moving to the next element in the menu\n      [{ send: historyhintcomplete }]\n      [{ send: menu name: context_menu }]\n      [{ send: menunext }]\n    ]\n  }\n  ]\n}\n')])])]),t("h3",{attrs:{id:"environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[e._v("#")]),e._v(" Environment")]),e._v(" "),t("p",[e._v("You can update the environment using "),t("code",[e._v("let-env")]),e._v(" calls inside of the "),t("code",[e._v("config.nu")]),e._v(" file. There are some important ones to look at which doing Nushell-specific settings:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("LS_COLORS")]),e._v(": Sets up colors per file type in ls")]),e._v(" "),t("li",[t("code",[e._v("PROMPT_COMMAND")]),e._v(": Code to execute for setting up the prompt (block or string)")]),e._v(" "),t("li",[t("code",[e._v("PROMPT_COMMAND_RIGHT")]),e._v(": Code to execute for setting up the right prompt (block)")]),e._v(" "),t("li",[t("code",[e._v('PROMPT_INDICATOR = "〉"')]),e._v(': The indicator printed after the prompt (by default ">"-like Unicode symbol)')]),e._v(" "),t("li",[t("code",[e._v('PROMPT_INDICATOR_VI_INSERT = ": "')])]),e._v(" "),t("li",[t("code",[e._v('PROMPT_INDICATOR_VI_NORMAL = "〉 "')])]),e._v(" "),t("li",[t("code",[e._v('PROMPT_MULTILINE_INDICATOR = "::: "')])])]),e._v(" "),t("h3",{attrs:{id:"color-config-section"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#color-config-section"}},[e._v("#")]),e._v(" Color Config section")]),e._v(" "),t("p",[e._v("You can learn more about setting up colors and theming in the "),t("a",{attrs:{href:"https://github.com/nushell/engine-q/blob/main/docs/How_To_Coloring_and_Theming.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("associated chapter"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"configuring-nu-as-a-login-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-nu-as-a-login-shell"}},[e._v("#")]),e._v(" Configuring Nu as a login shell")]),e._v(" "),t("p",[e._v("To use Nu as a login shell, you'll need to configure the "),t("code",[e._v("$env")]),e._v(" variable. With this, you'll have enough support to run external commands as a login shell.")]),e._v(" "),t("p",[e._v("You can build the full set of environment variables by running Nu inside of another shell, like Bash. Once you're in Nu, you can run a command like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> env | each { echo $\"let-env ($it.name) = '($it.raw)'\" } | str collect (char nl)\n")])])]),t("p",[e._v("This will print out a "),t("code",[e._v("let-env")]),e._v(" lines, one for each environment variable along with its setting.")]),e._v(" "),t("p",[e._v("Next, on some distros you'll also need to ensure Nu is in the /etc/shells list:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> cat /etc/shells\n# /etc/shells: valid login shells\n/bin/sh\n/bin/dash\n/bin/bash\n/bin/rbash\n/usr/bin/screen\n/usr/bin/fish\n/home/jonathan/.cargo/bin/nu\n")])])]),t("p",[e._v("With this, you should be able to "),t("code",[e._v("chsh")]),e._v(" and set Nu to be your login shell. After a logout, on your next login you should be greeted with a shiny Nu prompt.")]),e._v(" "),t("h3",{attrs:{id:"macos-keeping-usr-bin-open-as-open"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos-keeping-usr-bin-open-as-open"}},[e._v("#")]),e._v(" macOS: Keeping "),t("code",[e._v("/usr/bin/open")]),e._v(" as "),t("code",[e._v("open")])]),e._v(" "),t("p",[e._v("Some tools (e.g. Emacs) rely on an "),t("code",[e._v("open")]),e._v(" command to open files on Mac.\nAs nushell has its own "),t("code",[e._v("open")]),e._v(" command which has different semantics and shadows "),t("code",[e._v("/usr/bin/open")]),e._v(", these tools will error out when trying to use it.\nOne way to work around this is to define "),t("code",[e._v("alias")]),e._v("es in your "),t("code",[e._v("startup")]),e._v(" config like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('cat (config path)\n\nstartup = [\n  "alias nuopen = open",\n  "alias open = ^open",\n]\n')])])]),t("p",[e._v("Or using a one-liner:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('config set startup (config get startup | append "alias nuopen = open" | append "alias open = ^open")\n')])])]),t("h2",{attrs:{id:"prompt-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prompt-configuration"}},[e._v("#")]),e._v(" Prompt configuration")]),e._v(" "),t("p",[e._v("Prompt configuration is handled by setting the value of "),t("code",[e._v("prompt")]),e._v(".")]),e._v(" "),t("p",[e._v("For example, to use "),t("a",{attrs:{href:"https://starship.rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Starship"),t("OutboundLink")],1),e._v(", download it and enter the following command (0.18.2 and later):")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('let-env PROMPT_COMMAND = "starship prompt"\n')])])]),t("p",[e._v("Now restart Nu.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("nushell on 📙 main is 📦 v0.43.0 via 🦀 v1.58.0 \n❯\n")])])]),t("p",[e._v("If your prompt looks a bit garbled like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("%{%}~%{%}\n%{%}❯%{%}\n")])])]),t("p",[e._v("you may want to configure "),t("code",[e._v("STARSHIP_SHELL")]),e._v(" environment variable when setting the prompt.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('config set prompt "STARSHIP_SHELL=nushell starship prompt"\n')])])])])}),[],!1,null,null,null);n.default=o.exports}}]);