<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class backendPagesDashboard extends Component
{
    public $owner;
    /**
     * Create a new component instance.
     */
    public function __construct($owner)
    {
        $this->owner = $owner;
        //
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.backend-pages-dashboard');
    }
}
