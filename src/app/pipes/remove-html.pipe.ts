import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import StripTags from 'striptags';

@Pipe({ name: 'stripHtml', pure: false })
export class StripHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(content) {
        return StripTags(content);
    }
}