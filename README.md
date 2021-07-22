# ChromeCSSLayoutApiIssueHalfBlockSize

This "reduced test case" shows a bug in Chrome (93.0.4575.0).

It renders the div-elements below using the CSS (Houdini) Layout Api which, due to the bug, are rendered only half the blockSize as they should have been.

See live demo: [https://bhamblok.github.io/ChromeCSSLayoutApiIssueHalfBlockSize](https://bhamblok.github.io/ChromeCSSLayoutApiIssueHalfBlockSize);