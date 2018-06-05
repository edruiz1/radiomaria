<?php

/* themes/custom/rmaria/templates/nodes/node--radio-program--teaser.html.twig */
class __TwigTemplate_861aed19a1c3ca674ae42b3cb81e97d0f02be8c7346790d48a376eecb80753cf extends Twig_Template
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
        $tags = array("set" => 74, "if" => 87);
        $filters = array("clean_class" => 76, "striptags" => 91, "render" => 91, "t" => 93, "length" => 93, "slice" => 93);
        $functions = array("attach_library" => 83);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'if'),
                array('clean_class', 'striptags', 'render', 't', 'length', 'slice'),
                array('attach_library')
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

        // line 74
        $context["classes"] = array(0 => "node", 1 => ("node--type-" . \Drupal\Component\Utility\Html::getClass($this->getAttribute(        // line 76
($context["node"] ?? null), "bundle", array()))), 2 => (($this->getAttribute(        // line 77
($context["node"] ?? null), "isPromoted", array(), "method")) ? ("node--promoted") : ("")), 3 => (($this->getAttribute(        // line 78
($context["node"] ?? null), "isSticky", array(), "method")) ? ("node--sticky") : ("")), 4 => (( !$this->getAttribute(        // line 79
($context["node"] ?? null), "isPublished", array(), "method")) ? ("node--unpublished") : ("")), 5 => ((        // line 80
($context["view_mode"] ?? null)) ? (("node--view-mode-" . \Drupal\Component\Utility\Html::getClass(($context["view_mode"] ?? null)))) : ("")));
        // line 83
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->attachLibrary("classy/node"), "html", null, true));
        echo "
<article";
        // line 84
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["attributes"] ?? null), "addClass", array(0 => ($context["classes"] ?? null)), "method"), "html", null, true));
        echo ">
  <div class=\"left\">";
        // line 85
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["content"] ?? null), "field_host_imagen", array()), "html", null, true));
        echo "</div>
  <div class=\"right\">
    ";
        // line 87
        if ( !($context["page"] ?? null)) {
            // line 88
            echo "      <h3";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["title_attributes"] ?? null), "html", null, true));
            echo ">
        <a href=\"";
            // line 89
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["url"] ?? null), "html", null, true));
            echo "\" rel=\"bookmark\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["label"] ?? null), "html", null, true));
            echo "</a>
      </h3>
      ";
            // line 91
            $context["host"] = strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["content"] ?? null), "field_host", array())));
            // line 92
            echo "      ";
            $context["hours"] = strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["content"] ?? null), "field_hours", array())));
            // line 93
            echo "      <div class=\"host\"><span>";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("With")));
            echo "</span>";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (((twig_length_filter($this->env, ($context["host"] ?? null)) > 45)) ? ((twig_slice($this->env, ($context["host"] ?? null), 0, 45) . "...")) : (($context["host"] ?? null))), "html", null, true));
            echo "</div>
      <div class=\"hours\">";
            // line 94
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (((twig_length_filter($this->env, ($context["hours"] ?? null)) > 45)) ? ((twig_slice($this->env, ($context["hours"] ?? null), 0, 45) . "...")) : (($context["hours"] ?? null))), "html", null, true));
            echo "</div>
      <div class=\"links\">
        <a href=\"";
            // line 96
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (($context["base_path"] ?? null) . ($context["url"] ?? null)), "html", null, true));
            echo "\">
        ";
            // line 97
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("See more...")));
            echo "
        </a>
      </div>
    ";
        }
        // line 101
        echo "  </div>
</article>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/rmaria/templates/nodes/node--radio-program--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  105 => 101,  98 => 97,  94 => 96,  89 => 94,  82 => 93,  79 => 92,  77 => 91,  70 => 89,  65 => 88,  63 => 87,  58 => 85,  54 => 84,  50 => 83,  48 => 80,  47 => 79,  46 => 78,  45 => 77,  44 => 76,  43 => 74,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/custom/rmaria/templates/nodes/node--radio-program--teaser.html.twig", "/var/www/radiomariacol.org/public_html/themes/custom/rmaria/templates/nodes/node--radio-program--teaser.html.twig");
    }
}
