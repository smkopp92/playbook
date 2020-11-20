# frozen_string_literal: true

require_dependency "playbook/application_controller"

module Playbook
  class RenderController < ApplicationController
    skip_before_action :verify_authenticity_token
    # include PbKitHelper
    # include ApiHelper
    # include ActionController::MimeResponds

    # respond_to :html
    prepend_view_path(File.join(Playbook::Engine.root, "app/pb_kits/playbook"))
    # def self.controller_path

    # end
    def get
      json_string = render_to_string(file: "pb_avatar/docs/_avatar_default.html.erb", layout: false)
      render json: { partial: json_string }
    end

    def post
      # request = params[:kit]
      user_req = JSON.parse(request.body.string, symbolize_names: true)
      kit_req = user_req[:kit]
      kit = "Playbook::Pb#{kit_req.camelize}::#{kit_req.camelize}"
      var = kit.safe_constantize.new(user_req[:props])
      html = render_to_string(partial: var, as: :object)

      # # self.prefix_partial_path_with_controller_namespace = false
      # kit_html = render(partial: "playbook/pages/pb_avatar/avatar", as: :object)
      render json: { partial: html }

      # pb_rails("avatar")
      # partial_bit = render_to_string(partial: "playbook/pages/test", layout: false)
      # respond_to do |format|
      #   format.html { render html: partial_bit, content_type: "text/html" }
      # end
      # render json: { html_content: partial_bit }
      # prefix_partial_path_with_controller_namespace = true
      # render json: { partial: render(partial: "playbook/app/avatar/pb_kits/pb_avatar/avatar", layout: false) }
    end
  end
end
