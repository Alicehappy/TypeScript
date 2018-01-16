/// <reference path="fourslash.ts" />

////class C {
////    "foo bar": number;
////    xyz() {
////        /**/
////    }
////}

goTo.marker("");

verify.completionListContains("xyz", "(method) C.xyz(): void", "", "method", undefined, undefined, {
    includeInsertTextCompletions: true,
    insertText: "this.xyz",
});

verify.completionListContains("foo bar", '(property) C["foo bar"]: number', "", "property", undefined, undefined, {
    includeInsertTextCompletions: true,
    insertText: 'this["foo bar"]',
});
