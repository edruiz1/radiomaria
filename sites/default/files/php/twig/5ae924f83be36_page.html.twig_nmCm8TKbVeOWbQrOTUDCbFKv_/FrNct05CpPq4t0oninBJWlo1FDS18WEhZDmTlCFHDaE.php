<?php

/* themes/custom/rmaria/templates/pages/page.html.twig */
class __TwigTemplate_135c11bb5eeba8ff375be2d3f31eedeb9626be2b569fa7e38ff2b63f67f57ffa extends Twig_Template
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
        $tags = array("include" => 48, "if" => 52, "set" => 59);
        $filters = array("replace" => 59);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('include', 'if', 'set'),
                array('replace'),
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

        // line 44
        echo "
<div class=\"page--node--default\">

  ";
        // line 48
        echo "  ";
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/partials/header.html.twig"), "themes/custom/rmaria/templates/pages/page.html.twig", 48)->display($context);
        // line 49
        echo "
  <div class=\"page-content color-";
        // line 50
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["color_theme"] ?? null), "html", null, true));
        echo "\">
    <div class=\"container\">
      ";
        // line 52
        if ($this->getAttribute(($context["page"] ?? null), "title", array())) {
            // line 53
            echo "        <div class=\"row\">
          ";
            // line 54
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "title", array()), "html", null, true));
            echo "
        </div>
      ";
        }
        // line 57
        echo "      <div class=\"row\">
        ";
        // line 58
        if ($this->getAttribute(($context["page"] ?? null), "content", array())) {
            // line 59
            echo "          ";
            $context["currentPage"] = twig_replace_filter(($context["basePath"] ?? null), array("/" => ""));
            // line 60
            echo "          ";
            if ($this->getAttribute(($context["page"] ?? null), "sidebar", array())) {
                // line 61
                echo "            <main role=\"main\" class=\"main--wrapper col-xs-12 col-md-8 ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["currentPage"] ?? null), "html", null, true));
                echo "\">
              ";
                // line 62
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
                echo "
            </main>
            <div class=\"col-xs-12 col-md-4 region--sidebar\" role=\"complementary\">
              ";
                // line 65
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar", array()), "html", null, true));
                echo "
            </div>
          ";
            } else {
                // line 68
                echo "            <main role=\"main\" class=\"main--wrapper col-xs-12\">
              ";
                // line 69
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
                echo "
            </main>
          ";
            }
            // line 72
            echo "        ";
        }
        // line 73
        echo "      </div>
      <hr />
    </div>
  </div>

  ";
        // line 79
        echo "  ";
        $context["data"] = array("cssClasses" => "");
        // line 80
        echo "  ";
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/partials/footer.html.twig"), "themes/custom/rmaria/templates/pages/page.html.twig", 80)->display(array_merge($context, ($context["data"] ?? null)));
        // line 81
        echo "
  ";
        // line 82
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/partials/browsersync.html.twig"), "themes/custom/rmaria/templates/pages/page.html.twig", 82)->display($context);
        // line 83
        echo "</div>

";
        // line 85
        if ($this->getAttribute(($context["page"] ?? null), "aux", array())) {
            // line 86
            echo "  ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "aux", array()), "html", null, true));
            echo "
";
        }
    }

    public function getTemplateName()
    {
        return "themes/custom/rmaria/templates/pages/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  134 => 86,  132 => 85,  128 => 83,  126 => 82,  123 => 81,  120 => 80,  117 => 79,  110 => 73,  107 => 72,  101 => 69,  98 => 68,  92 => 65,  86 => 62,  81 => 61,  78 => 60,  75 => 59,  73 => 58,  70 => 57,  64 => 54,  61 => 53,  59 => 52,  54 => 50,  51 => 49,  48 => 48,  43 => 44,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/custom/rmaria/templates/pages/page.html.twig", "/var/www/radiomariacol.org/public_html/themes/custom/rmaria/templates/pages/page.html.twig");
    }
}
