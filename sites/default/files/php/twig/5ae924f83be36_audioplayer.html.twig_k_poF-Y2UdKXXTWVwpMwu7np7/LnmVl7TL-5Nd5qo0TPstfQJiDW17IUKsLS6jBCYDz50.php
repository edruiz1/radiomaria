<?php

/* modules/contrib/audiofield/templates/audioplayer.html.twig */
class __TwigTemplate_575a6c56ff4f3166f4de56884d766b9732892ee0a3d2762e8224e3d0ba0189be extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("for" => 16, "if" => 17);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('for', 'if'),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 15
        echo "<div class=\"audiofield\">
  ";
        // line 16
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["files"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["file"]) {
            // line 17
            echo "    <audio preload=\"";
            if (($this->getAttribute(($context["settings"] ?? null), "audio_player_lazyload", array()) == 1)) {
                echo "none";
            } else {
                echo "auto";
            }
            echo "\" controls ";
            if (($this->getAttribute(($context["settings"] ?? null), "audio_player_autoplay", array()) == 1)) {
                echo " autoplay ";
            }
            echo " ";
            if (($this->getAttribute(($context["settings"] ?? null), "download_button", array()) != 1)) {
                echo " controlsList=\"nodownload\" ";
            }
            echo ">
       <source src=\"";
            // line 18
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["file"], "url", array()), "html", null, true));
            echo "\" type=\"audio/mpeg\">
       Your browser does not support the audio element.
    </audio>
    <label>";
            // line 21
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["file"], "description", array()), "html", null, true));
            echo "</label>
  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['file'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 23
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "modules/contrib/audiofield/templates/audioplayer.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  81 => 23,  73 => 21,  67 => 18,  50 => 17,  46 => 16,  43 => 15,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "modules/contrib/audiofield/templates/audioplayer.html.twig", "/var/www/radiomariacol.org/public_html/modules/contrib/audiofield/templates/audioplayer.html.twig");
    }
}
