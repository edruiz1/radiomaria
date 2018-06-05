<?php

/* themes/custom/rmaria/templates/partials/browsersync.html.twig */
class __TwigTemplate_1246399cc720916bdd301173bfe358da9a2b1c1632b763259b8f16fee21e4e11 extends Twig_Template
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
        $tags = array("if" => 1);
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
        if (($context["debugging"] ?? null)) {
            // line 2
            echo "  <script id=\"__bs_script__\">//<![CDATA[
      document.write(\"<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.18.13'><\\/script>\".replace(\"HOST\", location.hostname));
//]]></script>
";
        }
    }

    public function getTemplateName()
    {
        return "themes/custom/rmaria/templates/partials/browsersync.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  45 => 2,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/custom/rmaria/templates/partials/browsersync.html.twig", "/var/www/radiomariacol.org/public_html/themes/custom/rmaria/templates/partials/browsersync.html.twig");
    }
}
