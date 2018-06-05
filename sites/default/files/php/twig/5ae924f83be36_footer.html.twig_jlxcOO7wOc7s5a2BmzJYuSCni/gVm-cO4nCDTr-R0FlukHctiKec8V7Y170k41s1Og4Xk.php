<?php

/* themes/custom/rmaria/templates/partials/footer.html.twig */
class __TwigTemplate_0bbdf6b5a8a1c3dc68c78e1f48dd55106258269b691536d5551fc8e55292ea2f extends Twig_Template
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
        $tags = array("if" => 15);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if'),
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

        // line 1
        echo "<footer id=\"footer\" class=\"footer\">
  <div class=\"container\">
    <div class=\"row middle-xs\">
      <div class=\"col-xs-12 col-sm-4 left\">
        <div class=\"region--footer-legal\">
          ";
        // line 6
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_legal", array()), "html", null, true));
        echo "
        </div>
      </div>
      <div class=\"col-xs-12 col-sm-8 right\">
        <div class=\"region--footer-links\">
          ";
        // line 11
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_links", array()), "html", null, true));
        echo "
        </div>
      </div>
    </div>
    ";
        // line 15
        if (($context["debugging"] ?? null)) {
            // line 16
            echo "      <div class=\"version\">";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["qaVersion"] ?? null), "html", null, true));
            echo "</div>
    ";
        }
        // line 18
        echo "  </div>
</footer>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/rmaria/templates/partials/footer.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  73 => 18,  67 => 16,  65 => 15,  58 => 11,  50 => 6,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/custom/rmaria/templates/partials/footer.html.twig", "/var/www/radiomariacol.org/public_html/themes/custom/rmaria/templates/partials/footer.html.twig");
    }
}
