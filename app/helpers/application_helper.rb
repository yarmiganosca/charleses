module ApplicationHelper
  def ng_templates(path)
    base_path = "#{Rails.root}/app/views/"

    Dir.glob("#{base_path}#{path}/**.ng.*").reduce([]) do |tags, template_path|
      relative_path = template_path.gsub(base_path, '')
      partial_path  = relative_path.sub(/\/_/, '/')
      name_path     = partial_path.sub(/\..*$/, '')

      tags << "<script type='text/ng-template' id='#{name_path}'>#{render(partial_path)}</script>"
    end.join.html_safe
  end
end
