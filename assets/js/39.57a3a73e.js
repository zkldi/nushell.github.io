(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{441:function(e,t,r){"use strict";r.r(t);var n=r(42),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"nushell-0-27"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-27"}},[e._v("#")]),e._v(" Nushell 0.27")]),e._v(" "),r("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),r("p",[e._v("Today, we're releasing 0.27 of Nu. This release fixes some long-standing issues with Nushell.")]),e._v(" "),r("h1",{attrs:{id:"where-to-get-it"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),r("p",[e._v("Nu 0.27 is available as "),r("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.27.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),r("OutboundLink")],1),e._v(" or from "),r("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),r("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),r("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),r("p",[e._v("If you want all the goodies, you can install "),r("code",[e._v("cargo install nu --features=extra")]),e._v(".")]),e._v(" "),r("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),r("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),r("h1",{attrs:{id:"what-s-new"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's New")]),e._v(" "),r("h2",{attrs:{id:"book-updates-fdncred-jonathandturner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#book-updates-fdncred-jonathandturner"}},[e._v("#")]),e._v(" Book updates (fdncred, jonathandturner)")]),e._v(" "),r("p",[e._v("The Nushell book received some much-needed updates. You'll notice new chapters and updated chapters to bring it more up-to-date with recent Nushell.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.nushell.sh/book/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Thoroughly updated configuration section"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.nushell.sh/book/types_of_data.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Updated section on data types"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.nushell.sh/book/custom_commands.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("A new section on creating your own commands"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.nushell.sh/book/aliases.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("An updated section on aliases"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.nushell.sh/book/variables_and_invocations.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("A new section on working with variables and expressions"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.nushell.sh/book/scripts.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("The start of a new section on writing your own Nushell scripts"),r("OutboundLink")],1)])]),e._v(" "),r("h1",{attrs:{id:"improvements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[e._v("#")]),e._v(" Improvements")]),e._v(" "),r("h2",{attrs:{id:"new-commands-fdncred"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-commands-fdncred"}},[e._v("#")]),e._v(" New commands (fdncred)")]),e._v(" "),r("ul",[r("li",[e._v("A new "),r("code",[e._v("term size")]),e._v(" commands "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3038",target:"_blank",rel:"noopener noreferrer"}},[e._v("lets you get the current size of the terminal"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("New "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2976",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("pow")]),e._v(" operator"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("New "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2975",target:"_blank",rel:"noopener noreferrer"}},[e._v("modulus("),r("code",[e._v("%")]),e._v(") operator"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"functionality-jonathandturner-watsonthink-ilius-andrasio-qwanve"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#functionality-jonathandturner-watsonthink-ilius-andrasio-qwanve"}},[e._v("#")]),e._v(" Functionality (jonathandturner, WatsonThink, ilius, andrasio, Qwanve)")]),e._v(" "),r("ul",[r("li",[e._v("Tables now "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3061",target:"_blank",rel:"noopener noreferrer"}},[e._v("truncate instead of crashing when too large"),r("OutboundLink")],1),e._v(" (jonathandturner)")]),e._v(" "),r("li",[r("code",[e._v("source")]),e._v(" command now can "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3059",target:"_blank",rel:"noopener noreferrer"}},[e._v("use tilde in the path"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("let-env")]),e._v(" can now shadow "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3057",target:"_blank",rel:"noopener noreferrer"}},[e._v("environment variables"),r("OutboundLink")],1),e._v(" in addition to adding new ones")]),e._v(" "),r("li",[e._v("Prompts can now call "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3056",target:"_blank",rel:"noopener noreferrer"}},[e._v("external commands on initial startup"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("You can now configure the "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3045",target:"_blank",rel:"noopener noreferrer"}},[e._v("file size standard to use"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Strings can now be passed in where "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3048",target:"_blank",rel:"noopener noreferrer"}},[e._v("column-paths were expected"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3016",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("More "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3035",target:"_blank",rel:"noopener noreferrer"}},[e._v("file size types have been added"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("sort-by")]),e._v(" can now "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3025",target:"_blank",rel:"noopener noreferrer"}},[e._v("reverse sort"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("which")]),e._v(" can now take "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3024",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiple applications"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("ps -l")]),e._v(" now has "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3015",target:"_blank",rel:"noopener noreferrer"}},[e._v("a cleaner output when the parent is missing"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("select")]),e._v(" can no longer "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3012",target:"_blank",rel:"noopener noreferrer"}},[e._v("select the same column twice"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("to-md --per-element")]),e._v(" now gives you "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2997",target:"_blank",rel:"noopener noreferrer"}},[e._v("more fine-grained control over the markdown output"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("A new "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2995",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("$nothing")]),e._v(" built-in variable to help check for the existence of a value"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("str from")]),e._v(" can convert "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2977",target:"_blank",rel:"noopener noreferrer"}},[e._v("more things to strings"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"internal-stormasm-ilius-fdncred-lhkipp-rreverser-jonathandturner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#internal-stormasm-ilius-fdncred-lhkipp-rreverser-jonathandturner"}},[e._v("#")]),e._v(" Internal (stormasm, ilius, fdncred, LhKipp, RReverser, jonathandturner)")]),e._v(" "),r("ul",[r("li",[e._v("Some "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3053",target:"_blank",rel:"noopener noreferrer"}},[e._v("comment parsing improvements"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("The "),r("code",[e._v("block")]),e._v(" function is now "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3047",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("parse_block")]),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("More "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3000",target:"_blank",rel:"noopener noreferrer"}},[e._v("Value helpers were added"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2986",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parser cleanup for handling "),r("code",[e._v("def")]),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("The "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2983",target:"_blank",rel:"noopener noreferrer"}},[e._v("WASI build should now be working again"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("File size is "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2984",target:"_blank",rel:"noopener noreferrer"}},[e._v("now a big int"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"documentation-watzon-ahkrr-lhkipp-andy-python-programmer-diogomafra"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#documentation-watzon-ahkrr-lhkipp-andy-python-programmer-diogomafra"}},[e._v("#")]),e._v(" Documentation (watzon, ahkrr, LhKipp, Andy-Python-Programmer, diogomafra)")]),e._v(" "),r("ul",[r("li",[e._v("Sample config has "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3060",target:"_blank",rel:"noopener noreferrer"}},[e._v("gotten an update"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3031",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Some "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3052",target:"_blank",rel:"noopener noreferrer"}},[e._v("README links got updated"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("More "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3013",target:"_blank",rel:"noopener noreferrer"}},[e._v("README updates"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2996",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("README now shows "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2993",target:"_blank",rel:"noopener noreferrer"}},[e._v("contributor icons"),r("OutboundLink")],1)])]),e._v(" "),r("h1",{attrs:{id:"breaking-changes-ammkrn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes-ammkrn"}},[e._v("#")]),e._v(" Breaking changes (ammkrn)")]),e._v(" "),r("ul",[r("li",[e._v("Booleans are now shown as "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/3043",target:"_blank",rel:"noopener noreferrer"}},[e._v("true/false instead of Yes/No"),r("OutboundLink")],1)])]),e._v(" "),r("h1",{attrs:{id:"looking-ahead"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#looking-ahead"}},[e._v("#")]),e._v(" Looking ahead")]),e._v(" "),r("p",[e._v("We're hard at work at putting together the proposed features for Nushell 1.0, which will help guide the work to get there. While there's still much work to do to achieve a 1.0 release, this proposal will let the community help refine and correct the direction. We're looking forward to kicking this off in the coming weeks.")])])}),[],!1,null,null,null);t.default=a.exports}}]);