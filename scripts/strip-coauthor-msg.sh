#!/bin/sh
# Used as git filter-branch --msg-filter: remove Co-authored-by lines, fix "from Cursor" -> "from IDE"
sed '/^Co-authored-by:/d' | sed 's/commit\/push from Cursor/commit\/push from IDE/'
