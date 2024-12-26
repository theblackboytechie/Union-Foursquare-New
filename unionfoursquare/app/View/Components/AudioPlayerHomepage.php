<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class AudioPlayerHomepage extends Component
{
    public $viewport;
    /**
     * Create a new component instance.
     */
    public function __construct($viewport)
    {
        $this->viewport = $viewport;
        //
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.audio-player-homepage');
    }
}
