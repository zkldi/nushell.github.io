(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{814:function(v,_,t){"use strict";t.r(_);var d=t(45),n=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"nushell演算子対応表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nushell演算子対応表"}},[v._v("#")]),v._v(" Nushell演算子対応表")]),v._v(" "),t("p",[v._v("このテーブルはNuの演算子と他言語の演算子の対応関係を理解するのを助けるためのものです。ここでは全てのNuの演算子とその演算子が他の言語でどう使われているかをマッピングしています。コントリビューション歓迎です。")]),v._v(" "),t("p",[v._v("注: Nuが0.14.1以降であることを想定しています。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("Nushell")]),v._v(" "),t("th",[v._v("SQL")]),v._v(" "),t("th",[v._v("Python")]),v._v(" "),t("th",[v._v(".Net LINQ (C#)")]),v._v(" "),t("th",[v._v("PowerShell")]),v._v(" "),t("th",[v._v("Bash")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("==")]),v._v(" "),t("td",[v._v("=")]),v._v(" "),t("td",[v._v("==")]),v._v(" "),t("td",[v._v("==")]),v._v(" "),t("td",[v._v("-eq, -is")]),v._v(" "),t("td",[v._v("-eq")])]),v._v(" "),t("tr",[t("td",[v._v("!=")]),v._v(" "),t("td",[v._v("!=, <>")]),v._v(" "),t("td",[v._v("!=")]),v._v(" "),t("td",[v._v("!=")]),v._v(" "),t("td",[v._v("-ne, -isnot")]),v._v(" "),t("td",[v._v("-ne")])]),v._v(" "),t("tr",[t("td",[v._v("<")]),v._v(" "),t("td",[v._v("<")]),v._v(" "),t("td",[v._v("<")]),v._v(" "),t("td",[v._v("<")]),v._v(" "),t("td",[v._v("-lt")]),v._v(" "),t("td",[v._v("-lt")])]),v._v(" "),t("tr",[t("td",[v._v("<=")]),v._v(" "),t("td",[v._v("<=")]),v._v(" "),t("td",[v._v("<=")]),v._v(" "),t("td",[v._v("<=")]),v._v(" "),t("td",[v._v("-le")]),v._v(" "),t("td",[v._v("-le")])]),v._v(" "),t("tr",[t("td",[v._v(">")]),v._v(" "),t("td",[v._v(">")]),v._v(" "),t("td",[v._v(">")]),v._v(" "),t("td",[v._v(">")]),v._v(" "),t("td",[v._v("-gt")]),v._v(" "),t("td",[v._v("-gt")])]),v._v(" "),t("tr",[t("td",[v._v(">=")]),v._v(" "),t("td",[v._v(">=")]),v._v(" "),t("td",[v._v(">=")]),v._v(" "),t("td",[v._v(">=")]),v._v(" "),t("td",[v._v("-ge")]),v._v(" "),t("td",[v._v("-ge")])]),v._v(" "),t("tr",[t("td",[v._v("=~")]),v._v(" "),t("td",[v._v("like")]),v._v(" "),t("td",[v._v("re, in, startswith")]),v._v(" "),t("td",[v._v("Contains, StartsWith")]),v._v(" "),t("td",[v._v("-like, -contains")]),v._v(" "),t("td",[v._v("=~")])]),v._v(" "),t("tr",[t("td",[v._v("!~")]),v._v(" "),t("td",[v._v("not like")]),v._v(" "),t("td",[v._v("not in")]),v._v(" "),t("td",[v._v("Except")]),v._v(" "),t("td",[v._v("-notlike, -notcontains")]),v._v(" "),t("td",[v._v('! "str1" =~ "str2"')])]),v._v(" "),t("tr",[t("td",[v._v("+")]),v._v(" "),t("td",[v._v("+")]),v._v(" "),t("td",[v._v("+")]),v._v(" "),t("td",[v._v("+")]),v._v(" "),t("td",[v._v("+")]),v._v(" "),t("td",[v._v("+")])]),v._v(" "),t("tr",[t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("-")])]),v._v(" "),t("tr",[t("td",[v._v("*")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td",[v._v("*")]),v._v(" "),t("td",[v._v("*")])]),v._v(" "),t("tr",[t("td",[v._v("/")]),v._v(" "),t("td",[v._v("/")]),v._v(" "),t("td",[v._v("/")]),v._v(" "),t("td",[v._v("/")]),v._v(" "),t("td",[v._v("/")]),v._v(" "),t("td",[v._v("/")])]),v._v(" "),t("tr",[t("td",[v._v("in")]),v._v(" "),t("td",[v._v("in")]),v._v(" "),t("td",[v._v("re, in, startswith")]),v._v(" "),t("td",[v._v("Contains, StartsWith")]),v._v(" "),t("td",[v._v("-In")]),v._v(" "),t("td",[v._v("case in")])]),v._v(" "),t("tr",[t("td",[v._v("not-in")]),v._v(" "),t("td",[v._v("not in")]),v._v(" "),t("td",[v._v("not in")]),v._v(" "),t("td",[v._v("Except")]),v._v(" "),t("td",[v._v("-NotIn")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("&&")]),v._v(" "),t("td",[v._v("and")]),v._v(" "),t("td",[v._v("and")]),v._v(" "),t("td",[v._v("&&")]),v._v(" "),t("td",[v._v("-And")]),v._v(" "),t("td",[v._v("-a, &&")])]),v._v(" "),t("tr",[t("td",[v._v("||")]),v._v(" "),t("td",[v._v("or")]),v._v(" "),t("td",[v._v("or")]),v._v(" "),t("td",[v._v("||")]),v._v(" "),t("td",[v._v("-Or")]),v._v(" "),t("td",[v._v("-o, ||")])])])])])}),[],!1,null,null,null);_.default=n.exports}}]);