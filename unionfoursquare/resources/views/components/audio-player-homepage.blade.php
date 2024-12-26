@if($viewport == "desktop")
    <?php $style=""; $viewport="audiotag-desktop" ?>
@elseif($viewport == "mobile")
    <?php $style="display: block;padding: 10px 5px;"; $viewport="audiotag-mobile" ?>
@endif

<audio
    controls loop preload="auto" 
    class="public-audioplayer-audiotag audiotag-desktop {{$viewport}}" 
>
    <source src="audio_file.mp3" type="audio/mp3">
    Your browser does not support the audio element.
</audio>