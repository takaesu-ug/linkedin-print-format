(function() {
    // Open more
    [].slice.call(document.querySelectorAll(".view-more-bar span")).forEach(function(t) {
        t.click();
    }), setTimeout(function() {
        [].slice.call(document.querySelectorAll(".toggle-show-more")).forEach(function(t) {
            t.click();
        });
    }, 1000);
    var head = document.getElementsByTagName("head")[0],
        tag = document.createElement("style"),
        style = `
        /* ********** CSS Start ********** */
        #global-error,
        #preview-ctx,
        .account-icons,
        #header,
        .more-info .loading,
        .address-book,
        .compact-view .endorse-button,
        .view-less-bar,
        .write-endorsement,
        .profile-aux,
        .demographic-info,
        .profile-card table,
        #website-view li+li,
        .profile-card-extras .profile-actions .show-more-info,
        #text-ad-container,
        #activity,
        .background-section .education-associated ul li p span,
        #profile-skills h5,
        .see-more-less,
        a.toggle-show-more,
        .background-section .education-associated dt span.closed,
        .background-section h4 a .external-link-indicator,
        .endorse-count,
        .endorsers-container,
        .endorsements-nav,
        #connections,
        #groups-container,
        #following-container,
        #aux,
        #footer,
        .edit-tools,
        .background-section .education-associated dt span,
        .background-section .projects-associated dt span,
        .background-section .patents-associated dt span,
        .background-section-drag-proxy .education-associated dt span,
        .background-section-drag-proxy .projects-associated dt span,
        .background-section-drag-proxy .patents-associated dt span,
        .background-section .education-associated dd.associated-endorsements p,
        .background-section-drag-proxy .education-associated dd.associated-endorsements p,
        #freemium-bg, /* Profile bg image */
        .endorse-skills, /* Skill recommendation */
        #endorsements { 
            display: none!important;
        }
        #contact-info-section {
            display: block!important;
            float:left!important;
            position: absolute!important;
            z-index: 100!important;
            margin-top: -96px!important;
            left: 2em!important;
            background: 0!important;
        }
        profile-card-extras .profile-actions {
            margin-top:-3.25em!important;
            left:84px!important;
            position:relative!important
        }
        .profile-card-extras .profile-actions:before {
            position:absolute!important;
            content:'LinkedIn'!important;
            color:#999!important;
            font-size:12px!important;
            line-height:2em!important;
            vertical-align:middle!important;
            width:60px!important;
            left:-60px!important
        }
        #body,#body .hp-nus-wrapper {
            width:100%!important;
            margin:0!important;
            padding:0!important
        }
        #wrapper {
            width:auto!important;
            padding:.5em!important
        }
        #profile {
            width:100%!important;
        }
        .profile-card {
            width:100%!important;
        }
        .profile-card .profile-picture,.profile-card .profile-overview {
            display:table-cell!important;
            width:none!important;
            float:none!important;
            vertical-align:middle!important;
            margin:0!important;
            padding:2em!important;
            height:auto!important;
            line-height:1!important;
            background:0!important
        }
        .profile-card .profile-picture {
            float: right!important;
        }
        .profile-card .profile-overview-content {
            min-height: 0!important;
            height: auto!important;
            padding-top: 0!important;
            padding-bottom: 0!important
        }
        .profile-top-card,
        .profile-card .profile-picture img,
        .more-info,
        .profile-card-extras .profile-actions,
        .profile-activity,
        .profile-background,
        .profile-endorsements,
        .profile-groups,
        .profile-following,
        .profile-connections,
        .profile-your-notes {
            -webkit-box-shadow: none!important;
            -moz-box-shadow: none!important;
            box-shadow: none!important
        }
        .profile-card .title {
            line-height: 1.7!important
        }
        .more-info table th,
        .more-info table tr.twitter-presence th,
        .more-info table tr.www-presence th,
        .profile-card-extras .profile-actions .public-profile span,
        .profile-card-extras .profile-actions .public-profile a {
            margin: 0!important;
            padding: 0!important;
            background: 0!important;
            font-size: 12px!important;
            line-height: 1.7em!important;
            vertical-align: middle!important;
            width: 60px!important
        }
        .profile-card-extras .profile-actions .public-profile a {
            width: auto!important
        }
        .profile-card-extras .profile-actions .public-profile span {
            float: left!important;
            color: #999!important
        }
        .more-info table,
        .profile-card-extras .profile-actions {
            float: left!important;
            clear: left!important;
            margin: 0!important;
            padding: 0!important
        }
        .profile-card-extras .profile-actions {
            margin: -38px 0 0!important;
            border: 0!important;
            background: 0!important
        }
        .profile-card-extras .profile-actions ul,
        .profile-card-extras .profile-actions ul li {
            margin: 0!important;
            padding: 0!important
        }
        .skills-section {
            display: inline!important
        }
        .skills-section .endorse-item {
            display: -moz-inline-stack!important;
            display: inline-block!important;
            vertical-align: middle!important;
            zoom: 1!important;
            margin: 0 5px 5px 0 !important
        }
        .background-section .education-associated,
        .background-section .projects-associated,
        .background-section .patents-associated,
        .background-section-drag-proxy .education-associated,
        .background-section-drag-proxy .projects-associated,
        .background-section-drag-proxy .patents-associated {
            margin-left: 0!important
        }
        .compact-view {
            margin-top: 0!important
        }
        .compact-view .endorse-item.extra-skill {
            display: inline-block!important
        }
        #background-certifications,
        #background-courses,
        #background-education,
        #background-experience,
        #background-honors,
        #background-languages,
        #background-organizations,
        #background-patents,
        #background-projects,
        #background-publications,
        #background-skills,
        #background-summary,
        #background-test-scores,
        #background-volunteering,
        #background-additional-info {
            margin-top: 15px!important
        }
        .background-section .education-associated dt:after {
            display: -moz-inline-stack!important;
            display: inline-block!important;
            vertical-align: middle!important;
            zoom: 1!important;
            height: 9px!important;
            width: 5px!important;
            margin-left: 2px!important;
            margin-right: 0!important;
            background: url(//www.linkedin.com/scds/common/u/images/apps/profile/sprite/sprite_profile_edit_tools_v12.png) no-repeat 0 -850px!important;
            content: ''!important
        }
        #languages-view ol {
            float: none!important;
            width: 100%!important;
            display: table!important
        }
        #languages-view li {
            float: none!important;
            min-height: 0!important;
            display: table-row!important;
            width: 100%!important
        }
        #languages-view h4,
        #languages-view span {
            display: table-cell!important;
            min-width: 8em!important;
            padding: .25em!important
        }
        .endorsement-info {
            float: none!important;
            width: auto!important;
            padding-left: 100px!important;
            padding-bottom: 0!important
        }
        .media-cell { /* slides resized */
            // width: 20%!important;
        }
        a,
        a * {
            color: #333!important
        }
        @media print {
            p,
            h2,
            h3 {
                orphans: 3!important;
                widows: 3
            }
            h2,
            h3 {
                page-break-after: avoid!important
            }
            .background-section hgroup {
                page-break-inside: avoid!important
            }
        }
        /* ********* CSS End ********** */
        `;
    tag.type = "text/css";
    tag.styleSheet ? tag.styleSheet.cssText = style : tag.appendChild(document.createTextNode(style));
    head.appendChild(tag);
})();
