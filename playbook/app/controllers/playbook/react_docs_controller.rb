# frozen_string_literal: true

require_dependency "playbook/application_controller"
require "yaml"

module Playbook
  class ReactDocsController < ApplicationController
    def react_docs
      render layout: "layouts/playbook/react_docs"
    end
  end
end
