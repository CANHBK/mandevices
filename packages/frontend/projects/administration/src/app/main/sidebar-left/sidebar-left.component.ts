import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})
export class SidebarLeftComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    ($ => {

      'use strict';

      const $items = $('.nav-main li.nav-parent');

      function expand($li) {
        $li.children('ul.nav-children').slideDown('fast', function() {
          $li.addClass('nav-expanded');
          $(this).css('display', '');
          ensureVisible($li);
        });
      }

      function collapse($li) {
        $li.children('ul.nav-children').slideUp('fast', function() {
          $(this).css('display', '');
          $li.removeClass('nav-expanded');
        });
      }

      function ensureVisible($li) {
        const scroller = $li.offsetParent();
        if (!scroller.get(0)) {
          return false;
        }

        const top = $li.position().top;
        if (top < 0) {
          scroller.animate({
            scrollTop: scroller.scrollTop() + top
          }, 'fast');
        }
      }

      function buildSidebarNav(anchor, prev, next, ev) {
        if (anchor.prop('href')) {
          const arrowWidth = parseInt(window.getComputedStyle(anchor.get(0), ':after').width, 10) || 0;
          if (ev.offsetX > anchor.get(0).offsetWidth - arrowWidth) {
            ev.preventDefault();
          }
        }

        if (prev.get(0) !== next.get(0)) {
          collapse(prev);
          expand(next);
        } else {
          collapse(prev);
        }
      }

      $items.find('> a').on('click', function(ev) {

        const $html = $('html');
        const $window = $(window);
        const $anchor = $(this);
        const $prev = $anchor.closest('ul.nav').find('> li.nav-expanded');
        const $next = $anchor.closest('li');
        const $ev = ev;

        if ($anchor.attr('href') === '#') {
          ev.preventDefault();
        }

        if (!$html.hasClass('sidebar-left-big-icons')) {
          buildSidebarNav($anchor, $prev, $next, $ev);
        } else if ($html.hasClass('sidebar-left-big-icons') && $window.width() < 768) {
          buildSidebarNav($anchor, $prev, $next, $ev);
        }

      });

      $('.nav-main a').filter(':not([href])').attr('href', '#');

    }).apply(this, [jQuery]);
  }

}
