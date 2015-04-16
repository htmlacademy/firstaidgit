import React from 'react';

let SVGIcon = React.createClass({
    componentWillMount() {
        this.icons = {
            cross: '<svg viewBox="0 0 1024 1024"><path class="path1" d="M1014.662 822.66c-0.004-0.004-0.008-0.008-0.012-0.010l-310.644-310.65 310.644-310.65c0.004-0.004 0.008-0.006 0.012-0.010 3.344-3.346 5.762-7.254 7.312-11.416 4.246-11.376 1.824-24.682-7.324-33.83l-146.746-146.746c-9.148-9.146-22.45-11.566-33.828-7.32-4.16 1.55-8.070 3.968-11.418 7.31 0 0.004-0.004 0.006-0.008 0.010l-310.648 310.652-310.648-310.65c-0.004-0.004-0.006-0.006-0.010-0.010-3.346-3.342-7.254-5.76-11.414-7.31-11.38-4.248-24.682-1.826-33.83 7.32l-146.748 146.748c-9.148 9.148-11.568 22.452-7.322 33.828 1.552 4.16 3.97 8.072 7.312 11.416 0.004 0.002 0.006 0.006 0.010 0.010l310.65 310.648-310.65 310.652c-0.002 0.004-0.006 0.006-0.008 0.010-3.342 3.346-5.76 7.254-7.314 11.414-4.248 11.376-1.826 24.682 7.322 33.83l146.748 146.746c9.15 9.148 22.452 11.568 33.83 7.322 4.16-1.552 8.070-3.97 11.416-7.312 0.002-0.004 0.006-0.006 0.010-0.010l310.648-310.65 310.648 310.65c0.004 0.002 0.008 0.006 0.012 0.008 3.348 3.344 7.254 5.762 11.414 7.314 11.378 4.246 24.684 1.826 33.828-7.322l146.746-146.748c9.148-9.148 11.57-22.454 7.324-33.83-1.552-4.16-3.97-8.068-7.314-11.414z"></path></svg>',
            twitter: '<svg viewBox="0 0 1024 1024"><path class="path1" d="M1024 194.418c-37.676 16.708-78.164 28.002-120.66 33.080 43.372-26 76.686-67.17 92.372-116.23-40.596 24.078-85.556 41.56-133.41 50.98-38.32-40.83-92.922-66.34-153.346-66.34-116.022 0-210.088 94.058-210.088 210.078 0 16.466 1.858 32.5 5.44 47.878-174.6-8.764-329.402-92.4-433.018-219.506-18.084 31.028-28.446 67.116-28.446 105.618 0 72.888 37.088 137.192 93.46 174.866-34.438-1.092-66.832-10.542-95.154-26.278-0.020 0.876-0.020 1.756-0.020 2.642 0 101.788 72.418 186.696 168.522 206-17.626 4.8-36.188 7.372-55.348 7.372-13.538 0-26.698-1.32-39.528-3.772 26.736 83.46 104.32 144.206 196.252 145.896-71.9 56.35-162.486 89.934-260.916 89.934-16.958 0-33.68-0.994-50.116-2.94 92.972 59.61 203.402 94.394 322.042 94.394 386.422 0 597.736-320.124 597.736-597.744 0-9.108-0.206-18.168-0.61-27.18 41.056-29.62 76.672-66.62 104.836-108.748z"></path></svg>',
            githubFull: '<svg viewBox="0 0 1024 1024"><path class="path1" d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path></svg>',
            github: '<svg viewBox="0 0 1024 1024"><path class="path1" d="M235.278 248.72c-50.792 0-94.484 16.806-131.084 50.416-38.086 35.852-57.14 80.66-57.14 134.436 0 35.852 10.376 69.462 31.294 100.832 18.674 29.126 38.18 47.806 63.778 56.024v2.242c-25.598 10.448-36.966 36.59-36.966 78.418 0 32.124 11.372 56.022 36.966 71.708v2.242c-70.654 23.146-102.992 66.094-102.992 128.83 0 54.534 23.748 94.488 70.066 119.878 36.59 20.172 83.578 30.254 140.346 30.254 138.17 0 207.406-57.882 207.406-173.664 0-72.446-53.322-116.882-160.128-133.316-24.646-3.726-43.286-12.696-55.982-26.89-9.708-9.708-14.542-19.418-14.542-29.126 0-27.632 14.958-43.696 44.82-48.176 45.558-6.714 82.728-27.824 111.486-63.296 28.75-35.48 43.13-77.118 43.13-124.916 0-14.938-4.518-30.996-10.488-48.172 19.418-4.488 33.050-8.594 43.292-12.332v-115.392c-45.054 17.928-86.99 26.884-122.842 26.884-31.374-17.922-63.824-26.884-100.42-26.884zM247.602 807.77c62.744 0 94.104 19.042 94.104 57.14 0 40.336-28.754 60.492-86.264 60.492-65.724 0-98.586-19.422-98.586-58.254-0.002-39.59 30.244-59.378 90.746-59.378zM239.76 512c-47.054 0-70.586-25.764-70.586-77.308 0-55.262 23.532-82.906 70.586-82.906 22.402 0 39.958 8.596 52.652 25.768 10.458 15.69 15.69 34.36 15.69 56.022 0 52.278-22.786 78.424-68.342 78.424zM580.384 0c-21.656 0-40.14 8.214-55.454 24.648-15.314 16.436-22.97 36.216-22.97 59.376 0 22.41 7.658 41.82 22.97 58.258 15.308 16.434 33.792 24.64 55.454 24.64 20.91 0 39.028-8.208 54.34-24.64 15.312-16.438 22.96-35.848 22.96-58.258 0-23.16-7.648-42.944-22.96-59.376-15.318-16.434-33.43-24.648-54.34-24.648zM643.13 255.998h-126.606c1.496 14.336-0.64 36.042-0.64 71.14v348.432c0 35.856 2.136 64.774 0.64 76.036h126.606c-1.5-16.376-5.394-44.668-5.394-82.758v-343.946c-0.006-32.864 3.894-54.568 5.394-68.904zM922.336 644.2c-32.872 0-49.082-25.028-49.082-75.066v-206.64h49.864c8.96 0 17.032-0.492 27.118 0.246 10.086 0.748 14.152 0.25 19.278 0.25v-106.99h-96.258v-47.616c0-17.922 2.816-34.302 5.054-44.542h-129.958c2.242 10.24 2.028 25.876 2.028 46.79v45.368h-56.32v106.988c15.364-2.24 29.090-3.356 38.796-3.356l17.524 1.118v202.786c0 62.742 7.958 108.672 23.636 137.8 20.922 38.84 57.622 58.258 112.136 58.258 38.848 0 73.118-7.464 98.714-22.41v-112.032c-20.474 12.7-39.382 19.048-62.53 19.048z"></path></svg>',
            search: '<svg><path fill="#444444" d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path></svg>',
            arrowDown: '<svg viewBox="0 0 1024 1024"><path class="path1" d="M1024 512c0-282.77-229.23-512-512-512s-512 229.23-512 512 229.23 512 512 512 512-229.23 512-512zM96 512c0-229.75 186.25-416 416-416s416 186.25 416 416-186.25 416-416 416-416-186.25-416-416z"></path>' +
	                   '<path class="path2" d="M317.256 354.744l-90.512 90.512 285.256 285.254 285.254-285.256-90.508-90.508-194.746 194.744z"></path></svg>'
        };
    },
    render() {
        var icon = this.props.icon || 'icon';

        return (
            <span onClick={this.props.callback} className={this.props.class} dangerouslySetInnerHTML={{__html: this.icons[icon]}}></span>
        );
    }
});

export default SVGIcon;
