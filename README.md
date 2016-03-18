
# ngFilePreview
A preview that detect the type of the file and changes accordingly


## Installation
`bower install ngFilePreview --save`


##Usage:

1. Add `ngFilePreview` to your angular app module dependencies list.<br />
`angular.module('MyApp', ['ngFilePreview']);`
2. Add the `tag`  to your html<br />
`<file-preview width="360" height="250" url-file="item.filePath" thumbnail="{{thumbnail}}">
    <div class="contentPreview"></div>
</file-preview>`
3. Change the config with the provicer<br />
`angular.module('MyApp').config(['filePreviewProvider', function (filePreviewProvider) {
	filePreviewProvider.setFallbackImage('/Content/images/sample-image.png')
	
	//to change the thumbnails.
	filePreviewProvider.setFallbackImage('/Content/images/semImagem.png')
	filePreviewProvider.types.image.showIcon = true;
	filePreviewProvider.types.video.thumbnail = "/Content/images/file_videos.png";
	filePreviewProvider.types.flash.thumbnail = "/Content/images/file_flash.png"
	filePreviewProvider.types.audio.thumbnail = "/Content/images/file_audio.png"
	filePreviewProvider.types.htmlFive.thumbnail = "/Content/images/file_html5.png"
});`
I'll update this, with basic sample as soon as possible.


## Icons license ( i recommend you to use your own, because the icons are only placeholders.
Icons are under the GNU General Public License v3.0<br />
http://www.gnu.org/licenses/gpl.html
	
